import 'server-only';
import { db } from '../lib/firebase';

export type ProfileData = {
  userId: string;
  totalVisits: number;
  createdAt: number;
}

export async function getProfileData(link: string) {
  const snapshot = await db.collection('profiles').doc(link).get()

  return snapshot.data() as ProfileData
}