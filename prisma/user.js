// /prisma/user.js
import prisma from './prisma'

// READ
export const getAllUsers = async () => {
  const users = await prisma.user2.findMany({})
  return users
}

export const getUser = async id => {
  const user = await prisma.user2.findUnique({
    where: { id }
  })
  return user
}

// CREATE
export const createUser = async (email, name, birthYear) => {
  const user = await prisma.user2.create({
    data: {
      email,
      name,
      birthYear
    }
  })
  return user
}

// UPDATE
export const updateUser = async (id, updateData) => {
  const user = await prisma.user2.update({
    where: {
      id
    },
    data: {
      ...updateData
    }
  })
  return user
}

// DELETE
export const deleteUser = async id => {
  const user = await prisma.user2.delete({
    where: {
      id
    }
  })
  return user
}