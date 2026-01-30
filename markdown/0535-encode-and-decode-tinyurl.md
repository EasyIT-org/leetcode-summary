# 535. Encode and Decode TinyURL

- Difficulty: Medium
- Topics: Hash Table, String, Design, Hash Function
- Slug: encode-and-decode-tinyurl
- Problem ID: 535

## Description
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.
There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
Implement the Solution class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input: url = "https://leetcode.com/problems/design-tinyurl"
Output: "https://leetcode.com/problems/design-tinyurl"

Explanation:
Solution obj = new Solution();
string tiny = obj.encode(url); // returns the encoded tiny url.
string ans = obj.decode(tiny); // returns the original url after decoding it.
```


## Constraints
- 1 <= url.length <= 104
- url is guranteed to be a valid URL.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Solution {
public:

    // Encodes a URL to a shortened URL.
    string encode(string longUrl) {
        
    }

    // Decodes a shortened URL to its original URL.
    string decode(string shortUrl) {
        
    }
};

// Your Solution object will be instantiated and called as such:
// Solution solution;
// solution.decode(solution.encode(url));
```

### java
```java
public class Codec {

    // Encodes a URL to a shortened URL.
    public String encode(String longUrl) {
        
    }

    // Decodes a shortened URL to its original URL.
    public String decode(String shortUrl) {
        
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url));
```

### python
```python
class Codec:

    def encode(self, longUrl):
        """Encodes a URL to a shortened URL.
        
        :type longUrl: str
        :rtype: str
        """
        

    def decode(self, shortUrl):
        """Decodes a shortened URL to its original URL.
        
        :type shortUrl: str
        :rtype: str
        """
        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))
```

### python3
```python3
class Codec:

    def encode(self, longUrl: str) -> str:
        """Encodes a URL to a shortened URL.
        """
        

    def decode(self, shortUrl: str) -> str:
        """Decodes a shortened URL to its original URL.
        """
        

# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(url))
```

### c
```c
/** Encodes a URL to a shortened URL. */
char* encode(char* longUrl) {
    
}

/** Decodes a shortened URL to its original URL. */
char* decode(char* shortUrl) {
    
}

// Your functions will be called as such:
// char* s = encode(s);
// decode(s);
```

### csharp
```csharp
public class Codec {

    // Encodes a URL to a shortened URL
    public string encode(string longUrl) {
        
    }

    // Decodes a shortened URL to its original URL.
    public string decode(string shortUrl) {
        
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url));
```

### javascript
```javascript
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
```

### typescript
```typescript
/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
	
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
	
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
```

### php
```php
class Codec {
    /**
     * Encodes a URL to a shortened URL.
     * @param String $longUrl
     * @return String
     */
    function encode($longUrl) {
        
    }
    
    /**
     * Decodes a shortened URL to its original URL.
     * @param String $shortUrl
     * @return String
     */
    function decode($shortUrl) {
        
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * $obj = Codec();
 * $s = $obj->encode($longUrl);
 * $ans = $obj->decode($s);
 */
```

### swift
```swift
class Codec {
    // Encodes a URL to a shortened URL.
    func encode(_ longUrl: String) -> String {
        
    }
    
    // Decodes a shortened URL to its original URL.
    func decode(_ shortUrl: String) -> String {
        
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * let obj = Codec()
 * val s = obj.encode(longUrl)
 * let ans = obj.decode(s)
*/
```

### kotlin
```kotlin
class Codec() {
    // Encodes a URL to a shortened URL.
    fun encode(longUrl: String): String {
        
    }

    // Decodes a shortened URL to its original URL.
    fun decode(shortUrl: String): String {
        
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * var obj = Codec()
 * var url = obj.encode(longUrl)
 * var ans = obj.decode(url)
 */
```

### golang
```golang
type Codec struct {
    
}


func Constructor() Codec {
    
}

// Encodes a URL to a shortened URL.
func (this *Codec) encode(longUrl string) string {
	
}

// Decodes a shortened URL to its original URL.
func (this *Codec) decode(shortUrl string) string {
    
}


/**
 * Your Codec object will be instantiated and called as such:
 * obj := Constructor();
 * url := obj.encode(longUrl);
 * ans := obj.decode(url);
 */
```

### ruby
```ruby
# Encodes a URL to a shortened URL.
#
# @param {string} longUrl
# @return {string}
def encode(longUrl)
    
end

# Decodes a shortened URL to its original URL.
#
# @param {string} shortUrl
# @return {string}
def decode(shortUrl)
    
end


# Your functions will be called as such:
# decode(encode(url))
```

### scala
```scala
class Codec {
    // Encodes a URL to a shortened URL.
    def encode(longURL: String): String = {
        
    }
    
    // Decodes a shortened URL to its original URL.
    def decode(shortURL: String): String = {
        
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * var obj = new Codec()
 * val s = obj.encode(longURL)
 * val ans = obj.decode(s)
 */
```

### rust
```rust
struct Codec {
	
}

/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Codec {
    fn new() -> Self {
        
    }
	
    // Encodes a URL to a shortened URL.
    fn encode(&self, longURL: String) -> String {
        
    }
	
    // Decodes a shortened URL to its original URL.
    fn decode(&self, shortURL: String) -> String {
        
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * let obj = Codec::new();
 * let s: String = obj.encode(strs);
 * let ans: VecVec<String> = obj.decode(s);
 */
```
