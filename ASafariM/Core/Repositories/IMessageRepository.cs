using Core.Entities;
namespace Core.Repositories
{
    public interface IMessageRepository
    {
        void Add(Message message);
    }
}
