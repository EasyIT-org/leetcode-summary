# 1206. Design Skiplist

- Difficulty: Hard
- Topics: Linked List, Design
- Slug: design-skiplist
- Problem ID: 1337

## Description
Design a Skiplist without using any built-in libraries.
A skiplist is a data structure that takes O(log(n)) time to add, erase and search. Comparing with treap and red-black tree which has the same function and performance, the code length of Skiplist can be comparatively short and the idea behind Skiplists is just simple linked lists.
For example, we have a Skiplist containing [30,40,50,60,70,90] and we want to add 80 and 45 into it. The Skiplist works this way:
Artyom Kalinin [CC BY-SA 3.0], via Wikimedia Commons
You can see there are many layers in the Skiplist. Each layer is a sorted linked list. With the help of the top layers, add, erase and search can be faster than O(n). It can be proven that the average time complexity for each operation is O(log(n)) and space complexity is O(n).
See more about Skiplist: https://en.wikipedia.org/wiki/Skip_list
Implement the Skiplist class:
Note that duplicates may exist in the Skiplist, your code needs to handle this situation.
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["Skiplist", "add", "add", "add", "search", "add", "search", "erase", "erase", "search"]
[[], [1], [2], [3], [0], [4], [1], [0], [1], [1]]
Output
[null, null, null, null, false, null, true, false, true, false]

Explanation
Skiplist skiplist = new Skiplist();
skiplist.add(1);
skiplist.add(2);
skiplist.add(3);
skiplist.search(0); // return False
skiplist.add(4);
skiplist.search(1); // return True
skiplist.erase(0);  // return False, 0 is not in skiplist.
skiplist.erase(1);  // return True
skiplist.search(1); // return False, 1 has already been erased.
```
Images:
- https://assets.leetcode.com/uploads/2019/09/27/1506_skiplist.gif


## Constraints
- 0 <= num, target <= 2 * 104
- At most 5 * 104 calls will be made to search, add, and erase.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class Skiplist {
public:
    Skiplist() {
        
    }
    
    bool search(int target) {
        
    }
    
    void add(int num) {
        
    }
    
    bool erase(int num) {
        
    }
};

/**
 * Your Skiplist object will be instantiated and called as such:
 * Skiplist* obj = new Skiplist();
 * bool param_1 = obj->search(target);
 * obj->add(num);
 * bool param_3 = obj->erase(num);
 */
```

### java
```java
class Skiplist {

    public Skiplist() {
        
    }
    
    public boolean search(int target) {
        
    }
    
    public void add(int num) {
        
    }
    
    public boolean erase(int num) {
        
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * Skiplist obj = new Skiplist();
 * boolean param_1 = obj.search(target);
 * obj.add(num);
 * boolean param_3 = obj.erase(num);
 */
```

### python
```python
class Skiplist(object):

    def __init__(self):
        

    def search(self, target):
        """
        :type target: int
        :rtype: bool
        """
        

    def add(self, num):
        """
        :type num: int
        :rtype: None
        """
        

    def erase(self, num):
        """
        :type num: int
        :rtype: bool
        """
        


# Your Skiplist object will be instantiated and called as such:
# obj = Skiplist()
# param_1 = obj.search(target)
# obj.add(num)
# param_3 = obj.erase(num)
```

### python3
```python3
class Skiplist:

    def __init__(self):
        

    def search(self, target: int) -> bool:
        

    def add(self, num: int) -> None:
        

    def erase(self, num: int) -> bool:
        


# Your Skiplist object will be instantiated and called as such:
# obj = Skiplist()
# param_1 = obj.search(target)
# obj.add(num)
# param_3 = obj.erase(num)
```

### c
```c



typedef struct {
    
} Skiplist;


Skiplist* skiplistCreate() {
    
}

bool skiplistSearch(Skiplist* obj, int target) {
    
}

void skiplistAdd(Skiplist* obj, int num) {
    
}

bool skiplistErase(Skiplist* obj, int num) {
    
}

void skiplistFree(Skiplist* obj) {
    
}

/**
 * Your Skiplist struct will be instantiated and called as such:
 * Skiplist* obj = skiplistCreate();
 * bool param_1 = skiplistSearch(obj, target);
 
 * skiplistAdd(obj, num);
 
 * bool param_3 = skiplistErase(obj, num);
 
 * skiplistFree(obj);
*/
```

### csharp
```csharp
public class Skiplist {

    public Skiplist() {
        
    }
    
    public bool Search(int target) {
        
    }
    
    public void Add(int num) {
        
    }
    
    public bool Erase(int num) {
        
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * Skiplist obj = new Skiplist();
 * bool param_1 = obj.Search(target);
 * obj.Add(num);
 * bool param_3 = obj.Erase(num);
 */
```

### javascript
```javascript

var Skiplist = function() {
    
};

/** 
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function(target) {
    
};

/** 
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function(num) {
    
};

/** 
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function(num) {
    
};

/** 
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
```

### typescript
```typescript
class Skiplist {
    constructor() {
        
    }

    search(target: number): boolean {
        
    }

    add(num: number): void {
        
    }

    erase(num: number): boolean {
        
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
```

### php
```php
class Skiplist {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param Integer $target
     * @return Boolean
     */
    function search($target) {
        
    }
  
    /**
     * @param Integer $num
     * @return NULL
     */
    function add($num) {
        
    }
  
    /**
     * @param Integer $num
     * @return Boolean
     */
    function erase($num) {
        
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * $obj = Skiplist();
 * $ret_1 = $obj->search($target);
 * $obj->add($num);
 * $ret_3 = $obj->erase($num);
 */
```

### swift
```swift

class Skiplist {

    init() {
        
    }
    
    func search(_ target: Int) -> Bool {
        
    }
    
    func add(_ num: Int) {
        
    }
    
    func erase(_ num: Int) -> Bool {
        
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * let obj = Skiplist()
 * let ret_1: Bool = obj.search(target)
 * obj.add(num)
 * let ret_3: Bool = obj.erase(num)
 */
```

### kotlin
```kotlin
class Skiplist() {

    fun search(target: Int): Boolean {
        
    }

    fun add(num: Int) {
        
    }

    fun erase(num: Int): Boolean {
        
    }

}

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */
```

### dart
```dart
class Skiplist {

  Skiplist() {
    
  }
  
  bool search(int target) {
    
  }
  
  void add(int num) {
    
  }
  
  bool erase(int num) {
    
  }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * Skiplist obj = Skiplist();
 * bool param1 = obj.search(target);
 * obj.add(num);
 * bool param3 = obj.erase(num);
 */
```

### golang
```golang
type Skiplist struct {
    
}


func Constructor() Skiplist {
    
}


func (this *Skiplist) Search(target int) bool {
    
}


func (this *Skiplist) Add(num int)  {
    
}


func (this *Skiplist) Erase(num int) bool {
    
}


/**
 * Your Skiplist object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Search(target);
 * obj.Add(num);
 * param_3 := obj.Erase(num);
 */
```

### ruby
```ruby
class Skiplist
    def initialize()
        
    end


=begin
    :type target: Integer
    :rtype: Boolean
=end
    def search(target)
        
    end


=begin
    :type num: Integer
    :rtype: Void
=end
    def add(num)
        
    end


=begin
    :type num: Integer
    :rtype: Boolean
=end
    def erase(num)
        
    end


end

# Your Skiplist object will be instantiated and called as such:
# obj = Skiplist.new()
# param_1 = obj.search(target)
# obj.add(num)
# param_3 = obj.erase(num)
```

### scala
```scala
class Skiplist() {

    def search(target: Int): Boolean = {
        
    }

    def add(num: Int): Unit = {
        
    }

    def erase(num: Int): Boolean = {
        
    }

}

/**
 * Your Skiplist object will be instantiated and called as such:
 * val obj = new Skiplist()
 * val param_1 = obj.search(target)
 * obj.add(num)
 * val param_3 = obj.erase(num)
 */
```

### rust
```rust
struct Skiplist {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Skiplist {

    fn new() -> Self {
        
    }
    
    fn search(&self, target: i32) -> bool {
        
    }
    
    fn add(&self, num: i32) {
        
    }
    
    fn erase(&self, num: i32) -> bool {
        
    }
}

/**
 * Your Skiplist object will be instantiated and called as such:
 * let obj = Skiplist::new();
 * let ret_1: bool = obj.search(target);
 * obj.add(num);
 * let ret_3: bool = obj.erase(num);
 */
```

### racket
```racket
(define skiplist%
  (class object%
    (super-new)
    
    (init-field)
    
    ; search : exact-integer? -> boolean?
    (define/public (search target)
      )
    ; add : exact-integer? -> void?
    (define/public (add num)
      )
    ; erase : exact-integer? -> boolean?
    (define/public (erase num)
      )))

;; Your skiplist% object will be instantiated and called as such:
;; (define obj (new skiplist%))
;; (define param_1 (send obj search target))
;; (send obj add num)
;; (define param_3 (send obj erase num))
```

### erlang
```erlang
-spec skiplist_init_() -> any().
skiplist_init_() ->
  .

-spec skiplist_search(Target :: integer()) -> boolean().
skiplist_search(Target) ->
  .

-spec skiplist_add(Num :: integer()) -> any().
skiplist_add(Num) ->
  .

-spec skiplist_erase(Num :: integer()) -> boolean().
skiplist_erase(Num) ->
  .


%% Your functions will be called as such:
%% skiplist_init_(),
%% Param_1 = skiplist_search(Target),
%% skiplist_add(Num),
%% Param_3 = skiplist_erase(Num),

%% skiplist_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule Skiplist do
  @spec init_() :: any
  def init_() do
    
  end

  @spec search(target :: integer) :: boolean
  def search(target) do
    
  end

  @spec add(num :: integer) :: any
  def add(num) do
    
  end

  @spec erase(num :: integer) :: boolean
  def erase(num) do
    
  end
end

# Your functions will be called as such:
# Skiplist.init_()
# param_1 = Skiplist.search(target)
# Skiplist.add(num)
# param_3 = Skiplist.erase(num)

# Skiplist.init_ will be called before every test case, in which you can do some necessary initializations.
```
