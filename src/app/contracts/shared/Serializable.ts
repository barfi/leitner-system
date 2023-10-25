/**
 * Represents pick option
 */
type PickOption<K> = {
  pick: K | K[]
  omit?: never
}

/**
 * Represents omit option
 */
type OmitOption<K> = {
  omit: K | K[]
  pick?: never
}

/**
 * Represents serialize options
 */
export type SerializeOption<T extends object, K = keyof T> = PickOption<K> | OmitOption<K>

/**
 * Represents serialized entity
 */
export type Serialized<E extends object, T> = T extends { pick: infer P }
  ? P extends keyof E
      ? Pick<E, P>
      : P extends Array<keyof E>
          ? Pick<E, P[number]>
          : never
  : T extends { omit: infer O }
      ? O extends keyof E
          ? Omit<E, O>
          : O extends Array<keyof E>
              ? Omit<E, O[number]>
              : never
      : E 

/**
 * Represents specific for serializable behavior
 */
export interface Serializable<E extends object> {

  /**
   * Allows to get JSON representation
   * 
   * @description Configurable output with pick/omit options
   * @example
   * sObj.toJSON() // => JSON with all fields
   * sObj.toJSON({ pick: 'key' }) // => JSON with `key` field only 
   * sObj.toJSON({ pick: ['k1', 'k2'] }) // => JSON with `k1`, `k2` field only
   * sObj.toJSON({ omit: 'key' }) // => JSON without `key` field
   * sObj.toJSON({ omit: ['k1', 'k2'] }) // => JSON without `k1`, `k2` fields
   */
  toJSON<T extends SerializeOption<E>>(options?: T): string

  /**
   * Allows to get underlying Entity object
   * 
   * @description Configurable output with pick/omit options
   * @example
   * sObj.toEntity() // => object with all fields
   * sObj.toEntity({ pick: 'key' }) // => object with `key` field only 
   * sObj.toEntity({ pick: ['k1', 'k2'] }) // => object with `k1`, `k2` field only
   * sObj.toEntity({ omit: 'key' }) // => object without `key` field
   * sObj.toEntity({ omit: ['k1', 'k2'] }) // => object without `k1`, `k2` fields
   */
  toEntity<O extends SerializeOption<E>>(options?: O): Serialized<E, O>

}
