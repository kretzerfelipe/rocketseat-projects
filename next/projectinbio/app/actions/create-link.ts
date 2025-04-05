'use server'

import { Timestamp } from 'firebase-admin/firestore'
import { db } from '../lib/firebase'
import { auth } from '../lib/auth'

export async function createLink(link: string) {

  const session = await auth()

  if (!session?.user) {
    return
  }

  try {
    const profileRef = db.collection('profiles').doc(link)

    await profileRef.set({
      userId: session.user.id,
      totalVisits: 0,
      createdAt: Timestamp.now().toMillis()
    })

    const snapshot = await profileRef.get()

    if (!snapshot.exists) return null

    return {
      id: snapshot.id,
      ...snapshot.data()
    }
  } catch (error) {
    return null
  }
}