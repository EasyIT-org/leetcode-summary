# 208. Implement Trie (Prefix Tree)

- Difficulty: Medium
- Topics: Hash Table, String, Design, Trie
- Slug: implement-trie-prefix-tree
- Problem ID: 208

## Description
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
Implement the Trie class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True
```


## Constraints
- 1 <= word.length, prefix.length <= 2000
- word and prefix consist only of lowercase English letters.
- At most 3 * 104 calls in total will be made to insert, search, and startsWith.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Trie {
public:
    Trie() {
        
    }
    
    void insert(string word) {
        
    }
    
    bool search(string word) {
        
    }
    
    bool startsWith(string prefix) {
        
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */
```

### java
```java
class Trie {

    public Trie() {
        
    }
    
    public void insert(String word) {
        
    }
    
    public boolean search(String word) {
        
    }
    
    public boolean startsWith(String prefix) {
        
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
```

### python
```python
class Trie(object):

    def __init__(self):
        

    def insert(self, word):
        """
        :type word: str
        :rtype: None
        """
        

    def search(self, word):
        """
        :type word: str
        :rtype: bool
        """
        

    def startsWith(self, prefix):
        """
        :type prefix: str
        :rtype: bool
        """
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
```

### python3
```python3
class Trie:

    def __init__(self):
        

    def insert(self, word: str) -> None:
        

    def search(self, word: str) -> bool:
        

    def startsWith(self, prefix: str) -> bool:
        


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
```

### c
```c



typedef struct {
    
} Trie;


Trie* trieCreate() {
    
}

void trieInsert(Trie* obj, char* word) {
    
}

bool trieSearch(Trie* obj, char* word) {
    
}

bool trieStartsWith(Trie* obj, char* prefix) {
    
}

void trieFree(Trie* obj) {
    
}

/**
 * Your Trie struct will be instantiated and called as such:
 * Trie* obj = trieCreate();
 * trieInsert(obj, word);
 
 * bool param_2 = trieSearch(obj, word);
 
 * bool param_3 = trieStartsWith(obj, prefix);
 
 * trieFree(obj);
*/
```

### csharp
```csharp
public class Trie {

    public Trie() {
        
    }
    
    public void Insert(string word) {
        
    }
    
    public bool Search(string word) {
        
    }
    
    public bool StartsWith(string prefix) {
        
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.Insert(word);
 * bool param_2 = obj.Search(word);
 * bool param_3 = obj.StartsWith(prefix);
 */
```

### javascript
```javascript

var Trie = function() {
    
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```

### typescript
```typescript
class Trie {
    constructor() {
        
    }

    insert(word: string): void {
        
    }

    search(word: string): boolean {
        
    }

    startsWith(prefix: string): boolean {
        
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```

### php
```php
class Trie {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param String $word
     * @return NULL
     */
    function insert($word) {
        
    }
  
    /**
     * @param String $word
     * @return Boolean
     */
    function search($word) {
        
    }
  
    /**
     * @param String $prefix
     * @return Boolean
     */
    function startsWith($prefix) {
        
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * $obj = Trie();
 * $obj->insert($word);
 * $ret_2 = $obj->search($word);
 * $ret_3 = $obj->startsWith($prefix);
 */
```

### swift
```swift

class Trie {

    init() {
        
    }
    
    func insert(_ word: String) {
        
    }
    
    func search(_ word: String) -> Bool {
        
    }
    
    func startsWith(_ prefix: String) -> Bool {
        
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * let obj = Trie()
 * obj.insert(word)
 * let ret_2: Bool = obj.search(word)
 * let ret_3: Bool = obj.startsWith(prefix)
 */
```

### kotlin
```kotlin
class Trie() {

    fun insert(word: String) {
        
    }

    fun search(word: String): Boolean {
        
    }

    fun startsWith(prefix: String): Boolean {
        
    }

}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```

### dart
```dart
class Trie {

  Trie() {
    
  }
  
  void insert(String word) {
    
  }
  
  bool search(String word) {
    
  }
  
  bool startsWith(String prefix) {
    
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = Trie();
 * obj.insert(word);
 * bool param2 = obj.search(word);
 * bool param3 = obj.startsWith(prefix);
 */
```

### golang
```golang
type Trie struct {
    
}


func Constructor() Trie {
    
}


func (this *Trie) Insert(word string)  {
    
}


func (this *Trie) Search(word string) bool {
    
}


func (this *Trie) StartsWith(prefix string) bool {
    
}


/**
 * Your Trie object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Insert(word);
 * param_2 := obj.Search(word);
 * param_3 := obj.StartsWith(prefix);
 */
```

### ruby
```ruby
class Trie
    def initialize()
        
    end


=begin
    :type word: String
    :rtype: Void
=end
    def insert(word)
        
    end


=begin
    :type word: String
    :rtype: Boolean
=end
    def search(word)
        
    end


=begin
    :type prefix: String
    :rtype: Boolean
=end
    def starts_with(prefix)
        
    end


end

# Your Trie object will be instantiated and called as such:
# obj = Trie.new()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.starts_with(prefix)
```

### scala
```scala
class Trie() {

    def insert(word: String): Unit = {
        
    }

    def search(word: String): Boolean = {
        
    }

    def startsWith(prefix: String): Boolean = {
        
    }

}

/**
 * Your Trie object will be instantiated and called as such:
 * val obj = new Trie()
 * obj.insert(word)
 * val param_2 = obj.search(word)
 * val param_3 = obj.startsWith(prefix)
 */
```

### rust
```rust
struct Trie {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Trie {

    fn new() -> Self {
        
    }
    
    fn insert(&self, word: String) {
        
    }
    
    fn search(&self, word: String) -> bool {
        
    }
    
    fn starts_with(&self, prefix: String) -> bool {
        
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * let obj = Trie::new();
 * obj.insert(word);
 * let ret_2: bool = obj.search(word);
 * let ret_3: bool = obj.starts_with(prefix);
 */
```

### racket
```racket
(define trie%
  (class object%
    (super-new)
    
    (init-field)
    
    ; insert : string? -> void?
    (define/public (insert word)
      )
    ; search : string? -> boolean?
    (define/public (search word)
      )
    ; starts-with : string? -> boolean?
    (define/public (starts-with prefix)
      )))

;; Your trie% object will be instantiated and called as such:
;; (define obj (new trie%))
;; (send obj insert word)
;; (define param_2 (send obj search word))
;; (define param_3 (send obj starts-with prefix))
```

### erlang
```erlang
-spec trie_init_() -> any().
trie_init_() ->
  .

-spec trie_insert(Word :: unicode:unicode_binary()) -> any().
trie_insert(Word) ->
  .

-spec trie_search(Word :: unicode:unicode_binary()) -> boolean().
trie_search(Word) ->
  .

-spec trie_starts_with(Prefix :: unicode:unicode_binary()) -> boolean().
trie_starts_with(Prefix) ->
  .


%% Your functions will be called as such:
%% trie_init_(),
%% trie_insert(Word),
%% Param_2 = trie_search(Word),
%% Param_3 = trie_starts_with(Prefix),

%% trie_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule Trie do
  @spec init_() :: any
  def init_() do
    
  end

  @spec insert(word :: String.t) :: any
  def insert(word) do
    
  end

  @spec search(word :: String.t) :: boolean
  def search(word) do
    
  end

  @spec starts_with(prefix :: String.t) :: boolean
  def starts_with(prefix) do
    
  end
end

# Your functions will be called as such:
# Trie.init_()
# Trie.insert(word)
# param_2 = Trie.search(word)
# param_3 = Trie.starts_with(prefix)

# Trie.init_ will be called before every test case, in which you can do some necessary initializations.
```
