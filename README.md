# imgapi
#### my-img-api.herokuapp.com/api/imagesearch/< searchterm >?offset=< number of ignored results(optional)>

example:
my-img-api.herokuapp.com/api/imagesearch/puppies?offset=5

Gives you a json of puppies ignoring the first 5 results.
```json
{
  url:	"http://www.bing.com/cr?IG=A4364DB3841E4B51B1C25E8DB5A4D61E&CID=0A0E9847C93469790B22923DC8D36809&rd=1&h=yKCFhrVjix83X1e8cLeHaQVZgvzSdPZNQT-OwzYbRLE&v=1&r=http%3a%2f%2f2.bp.blogspot.com%2f-CaGpPx6iu5c%2fTtcSbSixNrI%2fAAAAAAAADic%2fJmQyo3H_DdM%2fs1600%2fCute-White-Puppies-04.jpg&p=DevEx,5008.1"
  snippet:	"Cute White Puppies | In Photos | Funny And Cute Animals"
  thumbnail:	"https://tse2.mm.bing.net/th?id=OIP.CXOYMqHOi21-BYu5AEkCaQEgDY&pid=Api"
  context:	"cutefunnyanimal.blogspot.com/2011/11/cute-white-puppies-in-photos.html"
}
```
#### my-img-api.herokuapp.com/api/latest/imagesearch
Returns a json of the last 10 searches:
```json
{
  term	"puppies"
  when	"2017-05-06T22:49:50.453Z"
}
```
