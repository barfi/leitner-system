declare const emptyObjectSymbol: unique symbol

/**
 * Represents a strictly empty plain object, the `{}` value
 * 
 * @example
 * ```
 * const obj1: EmptyObject = {} // valid
 * const obj1: EmptyObject = [] // invalid
 * ```
 * @link https://github.com/sindresorhus/type-fest/blob/main/source/empty-object.d.ts
 */
export type EmptyObject = { [emptyObjectSymbol]?: never }
