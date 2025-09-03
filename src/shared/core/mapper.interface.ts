// Contrato de mapeo entre Dominio y Persistencia
export interface IMapper<TDomain, TPersist> {
  toDomain(doc: TPersist): TDomain;
  toPersistence(entity: TDomain): Record<string, unknown>;
  // Opcional: mapping parcial para updates
  toPersistencePartial?(partial: Partial<TDomain>): Record<string, unknown>;
}
