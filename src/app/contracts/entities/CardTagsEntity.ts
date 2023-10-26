import type { UUID } from '../shared/BrandedPrimitives'
import { type BaseEntity, baseEntityKeys } from './BaseEntity'

/**
 * Represents card tags entity stored in the database
 * 
 * @description Many to many relationship for card and tags 
 */
export type CardTagsEntity = BaseEntity & {

  /**
   * Card entity id
   */
  readonly cardId: UUID

  /**
   * Tag entity id
   */
  readonly tagId: UUID

}

/**
 * Card tags entity keys
 */
export const cardTagsEntityKeys: ReadonlyArray<keyof CardTagsEntity> = [
  ...baseEntityKeys,
  'cardId',
  'tagId'
]
