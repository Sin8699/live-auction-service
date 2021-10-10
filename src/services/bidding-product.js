import get from 'lodash/get'
import BiddingProduct from '../models/bidding-product'
import ServerError from '../utils/custom-error'

export async function createBiddingProduct(payload = {}, opts = {}) {
  try {
    return await BiddingProduct.create({ ...payload })
  } catch (err) {
    throw new ServerError({ name: 'Something error when create bidding product.', err })
  }
}

export async function getBiddingProduct(opts = {}) {
  const queryObj = { ...opts }

  try {
    return await BiddingProduct.findOne(queryObj)
  } catch (err) {
    throw new ServerError({ name: 'Something error when create user.', err })
  }
}
