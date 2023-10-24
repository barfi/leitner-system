import type { UUID } from '../common'
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
  cardId: UUID

  /**
   * Tag entity id
   */
  tagId: UUID

}

/**
 * Card tags entity keys
 */
export const flashcardTagsEntityKeys: ReadonlyArray<keyof CardTagsEntity> = [
  ...baseEntityKeys,
  'cardId',
  'tagId'
]
