using System.Threading.Tasks;
using NUnit.Framework;

namespace NCurly.Tests
{
    public class CurlyClientTests
    {
        private CurlyClient curly;

        [SetUp]
        public void Setup()
        {
            curly = new CurlyClient();
        }

        [Test]
        public async Task GetStringAsync_Passes()
        {
            var response = await curly.GetStringAsync("https://example.com");
            Assert.AreEqual("Hello world!", response);
        }
    }
}
