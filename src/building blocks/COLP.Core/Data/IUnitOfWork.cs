namespace COLP.Core.Data
{
    public interface IUnitOfWork
    {
        Task<bool> Commit();
    }
}
