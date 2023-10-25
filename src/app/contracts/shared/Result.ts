/**
 * Represents an abstract successful result
 */
type SuccessfullResult<T> = {
  isFailure: false
  value: T
}

/**
 * Represents an abstract failurefull result
 */
type FailurefullResult<T> = {
  isFailure: true
  reason: T
}

/**
 * Represents an abstract syncronous result
 */
export type SyncResult<T, E = Error> = SuccessfullResult<T> | FailurefullResult<E>

/**
 * Represents an abstract asyncronous result
 */
export type AsyncResult<T, E = Error> = Promise<SyncResult<T, E>>

/**
 * Creates successfull result with the given value
 */
export const success = <T>(value: T): SuccessfullResult<T> => {
  return {
    isFailure: false,
    value
  }
}

/**
 * Creates failurefull result with the given reason
 */
export const failure = <T>(reason: T): FailurefullResult<T> => {
  return {
    isFailure: true,
    reason
  }
}
