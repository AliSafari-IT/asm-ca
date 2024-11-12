using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entities
{
    [Table("Messages")]
    public class Message : BaseEntity
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Content { get; set; }
        public DateTime DateSent { get; set; } = DateTime.UtcNow; // Replace with `timestamp` type or remove default in model
        public string Subject { get; set; }
        public bool IsRead { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime AlteredAt { get; set; }
    }
}
