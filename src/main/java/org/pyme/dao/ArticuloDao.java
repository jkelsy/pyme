package org.pyme.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import org.pyme.model.Articulo;

/**
 * DAO for Articulo
 */
@Stateless
public class ArticuloDao {
	@PersistenceContext(unitName = "pyme-persistence-unit")
	private EntityManager em;

	public void create(Articulo entity) {
		em.persist(entity);
	}

	public void deleteById(Long id) {
		Articulo entity = em.find(Articulo.class, id);
		if (entity != null) {
			em.remove(entity);
		}
	}

	public Articulo findById(Long id) {
		return em.find(Articulo.class, id);
	}

	public Articulo update(Articulo entity) {
		return em.merge(entity);
	}

	public List<Articulo> listAll(Integer startPosition, Integer maxResult) {
		TypedQuery<Articulo> findAllQuery = em.createQuery(
				"SELECT DISTINCT a FROM Articulo a ORDER BY a.id",
				Articulo.class);
		if (startPosition != null) {
			findAllQuery.setFirstResult(startPosition);
		}
		if (maxResult != null) {
			findAllQuery.setMaxResults(maxResult);
		}
		return findAllQuery.getResultList();
	}
}
