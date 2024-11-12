using Application.Notification;
using MediatR;

namespace Application.Commands.Message.Create
{
    public class CreateMessageCommandHandler : CreateBaseCommand, IRequestHandler<CreateMessageCommandRequest, bool>
    {
        public CreateMessageCommandHandler(INotificationError notificationError) : base(notificationError)
        {
        }

        public Task<bool> Handle(CreateMessageCommandRequest request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}