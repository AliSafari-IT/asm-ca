using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Core.Entities;
using Infrastructure.Persistence.AsmDBContext;

namespace Infrastructure.Services
{
    public class MessageManager<T> where T : Message
    {
        private readonly AppDbContext _context;

        public MessageManager(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<T>> GetMessagesAsync()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<List<T>> GetMessagesForUserAsync(string userName)
        {
            return await _context.Set<T>().Where(m => m.UserName == userName).ToListAsync();
        }

        public async Task<T> CreateMessageAsync(T message)
        {
            _context.Set<T>().Add(message);
            await _context.SaveChangesAsync();
            return message;
        }
    }
}
