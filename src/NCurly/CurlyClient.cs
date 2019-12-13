using System.Threading.Tasks;

namespace NCurly
{
    public class CurlyClient
    {
        public Task<string> GetStringAsync(string requestUri)
        {
            return Task.FromResult("Hello world!");
        }
    }
}
