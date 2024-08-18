/* eslint-disable no-undef */
import { db } from '@/firebase/firebaseConfig'
import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore'

export const addDocument = async (uid, userData) => {
  try {
    const userDocRef = doc(db, 'users', uid)
    await setDoc(userDocRef, userData)
    console.log('created user...')
  } catch (e) {
    console.error('Error al agregar documento: ', e)
  }
}

// with automatic id, firestore create id
// export const addDocument = async (collectionName, data) => {
//   try {
//     const docRef = await addDoc(collection(db, collectionName), data);
//     console.log("Documento agregado con ID: ", docRef.id);
//     return docRef.id;
//   } catch (e) {
//     console.error("Error al agregar documento: ", e);
//   }
// };

export const getDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName))
    const documents = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    return documents
  } catch (e) {
    console.error('Error al obtener documentos: ', e)
  }
}

export const getUserData = async (uid) => {
  try {
    const userDocRef = doc(db, 'users', uid)
    const userDoc = await getDoc(userDocRef)
    if (userDoc.exists()) {
      return userDoc.data()
    } else {
      console.log('No such document!')
      return null
    }
  } catch (error) {
    console.error('Error getting document:', error)
    throw error
  }
}

export const updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId)
    await updateDoc(docRef, data)
    console.log('Documento actualizado con ID: ', docId)
  } catch (e) {
    console.error('Error al actualizar documento: ', e)
  }
}

export const deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId)
    await deleteDoc(docRef)
    console.log('Documento eliminado con ID: ', docId)
  } catch (e) {
    console.error('Error al eliminar documento: ', e)
  }
}
