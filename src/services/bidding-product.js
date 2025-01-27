import BiddingProduct from '../models/bidding-product'
import ServerError from '../utils/custom-error'

export async function createBiddingProduct(payload = {}, opts = {}) {
  try {
    return await BiddingProduct.create({...payload})
  }
  catch (err) {
    throw new ServerError({name: 'Something error when create bidding product.', err})
  }
}

export async function getBiddingProduct(opts = {}) {
  const queryObj = {...opts}

  try {
    return await BiddingProduct.findOne(queryObj)
  }
  catch (err) {
    throw new ServerError({name: 'Something error when get detail bidding product.', err})
  }
}

export async function getAllBiddingProduct(opts = {}) {
  const queryObj = {...opts}

  try {
    return await BiddingProduct.find(queryObj)
  }
  catch (err) {
    throw new ServerError({name: 'Something error when get all bidding product.', err})
  }
}

export async function updateBiddingProduct(opts = {}, payload) {
  const queryObj = {...opts}

  try {
    return await BiddingProduct.updateOne(queryObj, payload)
  }
  catch (err) {
    throw new ServerError({name: 'Something error when update bidding product.', err})
  }
}

export async function deleteBiddingProduct(opts = {}) {
  const queryObj = {...opts}

  try {
    return await BiddingProduct.deleteOne(queryObj)
  }
  catch (err) {
    throw new ServerError({name: 'Something error when delete bidding product.', err})
  }
}
