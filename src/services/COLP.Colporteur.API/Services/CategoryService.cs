﻿using COLP.Person.API.Data.Repository;
using COLP.Person.API.Models;

namespace COLP.Person.API.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public async Task<IEnumerable<Category>> GetAll()
        {
            return await _categoryRepository.GetAll();
        }

        public async Task<bool> InsertCategoriesToColporteur(Guid colporteurId, IEnumerable<Guid> categoryIds)
        {
            _categoryRepository.InsertCategoriesToColporteur(colporteurId, categoryIds);

            return await _categoryRepository.UnitOfWork.Commit();
        }
    }
}