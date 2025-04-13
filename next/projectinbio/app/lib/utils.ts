import imageCompression from 'browser-image-compression';
import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sanitizeLink(str?: string) {
  if (!str) return ''

  return str
    .replace(/\s/g, "")
    .replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,ˆ.<>\/?]+/, "")
    .toLocaleLowerCase(); // Remove leading and trailing hyphens
}

export async function compressImage(file: File): Promise<File> {

  const options  = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 900,
    useWebWorker: true,
    fileType: 'image/png'
  }

  return new Promise((resolve) => {
    imageCompression(file, options)
      .then((compressedFile) => {
        resolve(compressedFile)
      })
  })
}