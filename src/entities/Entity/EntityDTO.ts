import type { UUID, ISO8601 } from '../../shared'

/**
 * Represents common DTO fields of all entities
 */
export type EntityDTO = {

  /**
   * Unique identifier
   */
  readonly id: UUID

  /**
   * Date of creation
   */
  readonly createdAt: ISO8601

  /**
   * Update date
   */
  readonly updatedAt: ISO8601

}

/**
 * Entity DTO keys
 */
export const EntityDTOKeys: ReadonlyArray<keyof EntityDTO> = [
  'id',
  'createdAt',
  'updatedAt'
]
