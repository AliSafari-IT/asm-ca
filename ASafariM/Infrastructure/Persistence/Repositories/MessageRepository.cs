// MessageRepository.cs
using Core.Entities;
using Core.Repositories;
using Infrastructure.Persistence;
using Infrastructure.Persistence.AsmDBContext;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repositories
{
    public class MessageRepository : BaseRepository<Message>, IMessageRepository 
    {   
        public MessageRepository(AppDbContext context) : base(context)
        {
                
        }
       

        public void Add(Message message)
        {
            ArgumentNullException.ThrowIfNull(message);
            _dbSet.Add(message);

        }
    }
}