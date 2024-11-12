using MediatR;

namespace Application.Commands.Message.Create
{
    public class CreateMessageCommandRequest : IRequest<bool>
    { }
}
