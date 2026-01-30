# 745. Prefix and Suffix Search

- Difficulty: Hard
- Topics: Array, Hash Table, String, Design, Trie
- Slug: prefix-and-suffix-search
- Problem ID: 746

## Description
Design a special dictionary that searches the words in it by a prefix and a suffix.
Implement the WordFilter class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
Output
[null, 0]
Explanation
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e"); // return 0, because the word at index 0 has prefix = "a" and suffix = "e".
```


## Constraints
- 1 <= words.length <= 104
- 1 <= words[i].length <= 7
- 1 <= pref.length, suff.length <= 7
- words[i], pref and suff consist of lowercase English letters only.
- At most 104 calls will be made to the function f.

## Hints
- Take "apple" as an example, we will insert add "apple{apple", "pple{apple", "ple{apple", "le{apple", "e{apple", "{apple" into the Trie Tree.
- If the query is: prefix = "app", suffix = "le", we can find it by querying our trie for
"le { app".
- We use '{' because in ASCii Table, '{' is next to 'z', so we just need to create new TrieNode[27] instead of 26. Also, compared with traditional Trie, we add the attribute weight in class TrieNode.
You can still choose any different character.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class WordFilter {
public:
    WordFilter(vector<string>& words) {
        
    }
    
    int f(string pref, string suff) {
        
    }
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * WordFilter* obj = new WordFilter(words);
 * int param_1 = obj->f(pref,suff);
 */
```

### java
```java
class WordFilter {

    public WordFilter(String[] words) {
        
    }
    
    public int f(String pref, String suff) {
        
    }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * WordFilter obj = new WordFilter(words);
 * int param_1 = obj.f(pref,suff);
 */
```

### python
```python
class WordFilter(object):

    def __init__(self, words):
        """
        :type words: List[str]
        """
        

    def f(self, pref, suff):
        """
        :type pref: str
        :type suff: str
        :rtype: int
        """
        


# Your WordFilter object will be instantiated and called as such:
# obj = WordFilter(words)
# param_1 = obj.f(pref,suff)
```

### python3
```python3
class WordFilter:

    def __init__(self, words: List[str]):
        

    def f(self, pref: str, suff: str) -> int:
        


# Your WordFilter object will be instantiated and called as such:
# obj = WordFilter(words)
# param_1 = obj.f(pref,suff)
```

### c
```c



typedef struct {
    
} WordFilter;


WordFilter* wordFilterCreate(char** words, int wordsSize) {
    
}

int wordFilterF(WordFilter* obj, char* pref, char* suff) {
    
}

void wordFilterFree(WordFilter* obj) {
    
}

/**
 * Your WordFilter struct will be instantiated and called as such:
 * WordFilter* obj = wordFilterCreate(words, wordsSize);
 * int param_1 = wordFilterF(obj, pref, suff);
 
 * wordFilterFree(obj);
*/
```

### csharp
```csharp
public class WordFilter {

    public WordFilter(string[] words) {
        
    }
    
    public int F(string pref, string suff) {
        
    }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * WordFilter obj = new WordFilter(words);
 * int param_1 = obj.F(pref,suff);
 */
```

### javascript
```javascript
/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    
};

/** 
 * @param {string} pref 
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function(pref, suff) {
    
};

/** 
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
```

### typescript
```typescript
class WordFilter {
    constructor(words: string[]) {
        
    }

    f(pref: string, suff: string): number {
        
    }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
```

### php
```php
class WordFilter {
    /**
     * @param String[] $words
     */
    function __construct($words) {
        
    }
  
    /**
     * @param String $pref
     * @param String $suff
     * @return Integer
     */
    function f($pref, $suff) {
        
    }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * $obj = WordFilter($words);
 * $ret_1 = $obj->f($pref, $suff);
 */
```

### swift
```swift

class WordFilter {

    init(_ words: [String]) {
        
    }
    
    func f(_ pref: String, _ suff: String) -> Int {
        
    }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * let obj = WordFilter(words)
 * let ret_1: Int = obj.f(pref, suff)
 */
```

### kotlin
```kotlin
class WordFilter(words: Array<String>) {

    fun f(pref: String, suff: String): Int {
        
    }

}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
```

### dart
```dart
class WordFilter {

  WordFilter(List<String> words) {
    
  }
  
  int f(String pref, String suff) {
    
  }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * WordFilter obj = WordFilter(words);
 * int param1 = obj.f(pref,suff);
 */
```

### golang
```golang
type WordFilter struct {
    
}


func Constructor(words []string) WordFilter {
    
}


func (this *WordFilter) F(pref string, suff string) int {
    
}


/**
 * Your WordFilter object will be instantiated and called as such:
 * obj := Constructor(words);
 * param_1 := obj.F(pref,suff);
 */
```

### ruby
```ruby
class WordFilter

=begin
    :type words: String[]
=end
    def initialize(words)
        
    end


=begin
    :type pref: String
    :type suff: String
    :rtype: Integer
=end
    def f(pref, suff)
        
    end


end

# Your WordFilter object will be instantiated and called as such:
# obj = WordFilter.new(words)
# param_1 = obj.f(pref, suff)
```

### scala
```scala
class WordFilter(_words: Array[String]) {

    def f(pref: String, suff: String): Int = {
        
    }

}

/**
 * Your WordFilter object will be instantiated and called as such:
 * val obj = new WordFilter(words)
 * val param_1 = obj.f(pref,suff)
 */
```

### rust
```rust
struct WordFilter {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl WordFilter {

    fn new(words: Vec<String>) -> Self {
        
    }
    
    fn f(&self, pref: String, suff: String) -> i32 {
        
    }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * let obj = WordFilter::new(words);
 * let ret_1: i32 = obj.f(pref, suff);
 */
```

### racket
```racket
(define word-filter%
  (class object%
    (super-new)
    
    ; words : (listof string?)
    (init-field
      words)
    
    ; f : string? string? -> exact-integer?
    (define/public (f pref suff)
      )))

;; Your word-filter% object will be instantiated and called as such:
;; (define obj (new word-filter% [words words]))
;; (define param_1 (send obj f pref suff))
```

### erlang
```erlang
-spec word_filter_init_(Words :: [unicode:unicode_binary()]) -> any().
word_filter_init_(Words) ->
  .

-spec word_filter_f(Pref :: unicode:unicode_binary(), Suff :: unicode:unicode_binary()) -> integer().
word_filter_f(Pref, Suff) ->
  .


%% Your functions will be called as such:
%% word_filter_init_(Words),
%% Param_1 = word_filter_f(Pref, Suff),

%% word_filter_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule WordFilter do
  @spec init_(words :: [String.t]) :: any
  def init_(words) do
    
  end

  @spec f(pref :: String.t, suff :: String.t) :: integer
  def f(pref, suff) do
    
  end
end

# Your functions will be called as such:
# WordFilter.init_(words)
# param_1 = WordFilter.f(pref, suff)

# WordFilter.init_ will be called before every test case, in which you can do some necessary initializations.
```
