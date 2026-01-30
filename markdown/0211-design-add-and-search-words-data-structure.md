# 211. Design Add and Search Words Data Structure

- Difficulty: Medium
- Topics: String, Depth-First Search, Design, Trie
- Slug: design-add-and-search-words-data-structure
- Problem ID: 211

## Description
Design a data structure that supports adding new words and finding if a string matches any previously added string.
Implement the WordDictionary class:
Example:
Constraints:

## Examples
### Example 1
```text
Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
```


## Constraints
- 1 <= word.length <= 25
- word in addWord consists of lowercase English letters.
- word in search consist of '.' or lowercase English letters.
- There will be at most 2 dots in word for search queries.
- At most 104 calls will be made to addWord and search.

## Hints
- You should be familiar with how a Trie works. If not, please work on this problem: <a href="https://leetcode.com/problems/implement-trie-prefix-tree/">Implement Trie (Prefix Tree)</a> first.

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class WordDictionary {
public:
    WordDictionary() {
        
    }
    
    void addWord(string word) {
        
    }
    
    bool search(string word) {
        
    }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary* obj = new WordDictionary();
 * obj->addWord(word);
 * bool param_2 = obj->search(word);
 */
```

### java
```java
class WordDictionary {

    public WordDictionary() {
        
    }
    
    public void addWord(String word) {
        
    }
    
    public boolean search(String word) {
        
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.addWord(word);
 * boolean param_2 = obj.search(word);
 */
```

### python
```python
class WordDictionary(object):

    def __init__(self):
        

    def addWord(self, word):
        """
        :type word: str
        :rtype: None
        """
        

    def search(self, word):
        """
        :type word: str
        :rtype: bool
        """
        


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
```

### python3
```python3
class WordDictionary:

    def __init__(self):
        

    def addWord(self, word: str) -> None:
        

    def search(self, word: str) -> bool:
        


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
```

### c
```c



typedef struct {
    
} WordDictionary;


WordDictionary* wordDictionaryCreate() {
    
}

void wordDictionaryAddWord(WordDictionary* obj, char* word) {
    
}

bool wordDictionarySearch(WordDictionary* obj, char* word) {
    
}

void wordDictionaryFree(WordDictionary* obj) {
    
}

/**
 * Your WordDictionary struct will be instantiated and called as such:
 * WordDictionary* obj = wordDictionaryCreate();
 * wordDictionaryAddWord(obj, word);
 
 * bool param_2 = wordDictionarySearch(obj, word);
 
 * wordDictionaryFree(obj);
*/
```

### csharp
```csharp
public class WordDictionary {

    public WordDictionary() {
        
    }
    
    public void AddWord(string word) {
        
    }
    
    public bool Search(string word) {
        
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = new WordDictionary();
 * obj.AddWord(word);
 * bool param_2 = obj.Search(word);
 */
```

### javascript
```javascript

var WordDictionary = function() {
    
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
```

### typescript
```typescript
class WordDictionary {
    constructor() {
        
    }

    addWord(word: string): void {
        
    }

    search(word: string): boolean {
        
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
```

### php
```php
class WordDictionary {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param String $word
     * @return NULL
     */
    function addWord($word) {
        
    }
  
    /**
     * @param String $word
     * @return Boolean
     */
    function search($word) {
        
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * $obj = WordDictionary();
 * $obj->addWord($word);
 * $ret_2 = $obj->search($word);
 */
```

### swift
```swift

class WordDictionary {

    init() {
        
    }
    
    func addWord(_ word: String) {
        
    }
    
    func search(_ word: String) -> Bool {
        
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * let obj = WordDictionary()
 * obj.addWord(word)
 * let ret_2: Bool = obj.search(word)
 */
```

### kotlin
```kotlin
class WordDictionary() {

    fun addWord(word: String) {
        
    }

    fun search(word: String): Boolean {
        
    }

}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
```

### dart
```dart
class WordDictionary {

  WordDictionary() {
    
  }
  
  void addWord(String word) {
    
  }
  
  bool search(String word) {
    
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary obj = WordDictionary();
 * obj.addWord(word);
 * bool param2 = obj.search(word);
 */
```

### golang
```golang
type WordDictionary struct {
    
}


func Constructor() WordDictionary {
    
}


func (this *WordDictionary) AddWord(word string)  {
    
}


func (this *WordDictionary) Search(word string) bool {
    
}


/**
 * Your WordDictionary object will be instantiated and called as such:
 * obj := Constructor();
 * obj.AddWord(word);
 * param_2 := obj.Search(word);
 */
```

### ruby
```ruby
class WordDictionary
    def initialize()
        
    end


=begin
    :type word: String
    :rtype: Void
=end
    def add_word(word)
        
    end


=begin
    :type word: String
    :rtype: Boolean
=end
    def search(word)
        
    end


end

# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary.new()
# obj.add_word(word)
# param_2 = obj.search(word)
```

### scala
```scala
class WordDictionary() {

    def addWord(word: String): Unit = {
        
    }

    def search(word: String): Boolean = {
        
    }

}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * val obj = new WordDictionary()
 * obj.addWord(word)
 * val param_2 = obj.search(word)
 */
```

### rust
```rust
struct WordDictionary {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl WordDictionary {

    fn new() -> Self {
        
    }
    
    fn add_word(&self, word: String) {
        
    }
    
    fn search(&self, word: String) -> bool {
        
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * let obj = WordDictionary::new();
 * obj.add_word(word);
 * let ret_2: bool = obj.search(word);
 */
```

### racket
```racket
(define word-dictionary%
  (class object%
    (super-new)
    
    (init-field)
    
    ; add-word : string? -> void?
    (define/public (add-word word)
      )
    ; search : string? -> boolean?
    (define/public (search word)
      )))

;; Your word-dictionary% object will be instantiated and called as such:
;; (define obj (new word-dictionary%))
;; (send obj add-word word)
;; (define param_2 (send obj search word))
```

### erlang
```erlang
-spec word_dictionary_init_() -> any().
word_dictionary_init_() ->
  .

-spec word_dictionary_add_word(Word :: unicode:unicode_binary()) -> any().
word_dictionary_add_word(Word) ->
  .

-spec word_dictionary_search(Word :: unicode:unicode_binary()) -> boolean().
word_dictionary_search(Word) ->
  .


%% Your functions will be called as such:
%% word_dictionary_init_(),
%% word_dictionary_add_word(Word),
%% Param_2 = word_dictionary_search(Word),

%% word_dictionary_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule WordDictionary do
  @spec init_() :: any
  def init_() do
    
  end

  @spec add_word(word :: String.t) :: any
  def add_word(word) do
    
  end

  @spec search(word :: String.t) :: boolean
  def search(word) do
    
  end
end

# Your functions will be called as such:
# WordDictionary.init_()
# WordDictionary.add_word(word)
# param_2 = WordDictionary.search(word)

# WordDictionary.init_ will be called before every test case, in which you can do some necessary initializations.
```
