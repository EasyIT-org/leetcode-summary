# 381. Insert Delete GetRandom O(1) - Duplicates allowed

- Difficulty: Hard
- Topics: Array, Hash Table, Math, Design, Randomized
- Slug: insert-delete-getrandom-o1-duplicates-allowed
- Problem ID: 381

## Description
RandomizedCollection is a data structure that contains a collection of numbers, possibly duplicates (i.e., a multiset). It should support inserting and removing specific elements and also reporting a random element.
Implement the RandomizedCollection class:
You must implement the functions of the class such that each function works on average O(1) time complexity.
Note: The test cases are generated such that getRandom will only be called if there is at least one item in the RandomizedCollection.
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["RandomizedCollection", "insert", "insert", "insert", "getRandom", "remove", "getRandom"]
[[], [1], [1], [2], [], [1], []]
Output
[null, true, false, true, 2, true, 1]

Explanation
RandomizedCollection randomizedCollection = new RandomizedCollection();
randomizedCollection.insert(1);   // return true since the collection does not contain 1.
                                  // Inserts 1 into the collection.
randomizedCollection.insert(1);   // return false since the collection contains 1.
                                  // Inserts another 1 into the collection. Collection now contains [1,1].
randomizedCollection.insert(2);   // return true since the collection does not contain 2.
                                  // Inserts 2 into the collection. Collection now contains [1,1,2].
randomizedCollection.getRandom(); // getRandom should:
                                  // - return 1 with probability 2/3, or
                                  // - return 2 with probability 1/3.
randomizedCollection.remove(1);   // return true since the collection contains 1.
                                  // Removes 1 from the collection. Collection now contains [1,2].
randomizedCollection.getRandom(); // getRandom should return 1 or 2, both equally likely.
```


## Constraints
- -231 <= val <= 231 - 1
- At most 2 * 105 calls in total will be made to insert, remove, and getRandom.
- There will be at least one element in the data structure when getRandom is called.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class RandomizedCollection {
public:
    RandomizedCollection() {
        
    }
    
    bool insert(int val) {
        
    }
    
    bool remove(int val) {
        
    }
    
    int getRandom() {
        
    }
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * RandomizedCollection* obj = new RandomizedCollection();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */
```

### java
```java
class RandomizedCollection {

    public RandomizedCollection() {
        
    }
    
    public boolean insert(int val) {
        
    }
    
    public boolean remove(int val) {
        
    }
    
    public int getRandom() {
        
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * RandomizedCollection obj = new RandomizedCollection();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
```

### python
```python
class RandomizedCollection(object):

    def __init__(self):
        

    def insert(self, val):
        """
        :type val: int
        :rtype: bool
        """
        

    def remove(self, val):
        """
        :type val: int
        :rtype: bool
        """
        

    def getRandom(self):
        """
        :rtype: int
        """
        


# Your RandomizedCollection object will be instantiated and called as such:
# obj = RandomizedCollection()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
```

### python3
```python3
class RandomizedCollection:

    def __init__(self):
        

    def insert(self, val: int) -> bool:
        

    def remove(self, val: int) -> bool:
        

    def getRandom(self) -> int:
        


# Your RandomizedCollection object will be instantiated and called as such:
# obj = RandomizedCollection()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
```

### c
```c



typedef struct {
    
} RandomizedCollection;


RandomizedCollection* randomizedCollectionCreate() {
    
}

bool randomizedCollectionInsert(RandomizedCollection* obj, int val) {
    
}

bool randomizedCollectionRemove(RandomizedCollection* obj, int val) {
    
}

int randomizedCollectionGetRandom(RandomizedCollection* obj) {
    
}

void randomizedCollectionFree(RandomizedCollection* obj) {
    
}

/**
 * Your RandomizedCollection struct will be instantiated and called as such:
 * RandomizedCollection* obj = randomizedCollectionCreate();
 * bool param_1 = randomizedCollectionInsert(obj, val);
 
 * bool param_2 = randomizedCollectionRemove(obj, val);
 
 * int param_3 = randomizedCollectionGetRandom(obj);
 
 * randomizedCollectionFree(obj);
*/
```

### csharp
```csharp
public class RandomizedCollection {

    public RandomizedCollection() {
        
    }
    
    public bool Insert(int val) {
        
    }
    
    public bool Remove(int val) {
        
    }
    
    public int GetRandom() {
        
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * RandomizedCollection obj = new RandomizedCollection();
 * bool param_1 = obj.Insert(val);
 * bool param_2 = obj.Remove(val);
 * int param_3 = obj.GetRandom();
 */
```

### javascript
```javascript

var RandomizedCollection = function() {
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
    
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
    
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
```

### typescript
```typescript
class RandomizedCollection {
    constructor() {
        
    }

    insert(val: number): boolean {
        
    }

    remove(val: number): boolean {
        
    }

    getRandom(): number {
        
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
```

### php
```php
class RandomizedCollection {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param Integer $val
     * @return Boolean
     */
    function insert($val) {
        
    }
  
    /**
     * @param Integer $val
     * @return Boolean
     */
    function remove($val) {
        
    }
  
    /**
     * @return Integer
     */
    function getRandom() {
        
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * $obj = RandomizedCollection();
 * $ret_1 = $obj->insert($val);
 * $ret_2 = $obj->remove($val);
 * $ret_3 = $obj->getRandom();
 */
```

### swift
```swift

class RandomizedCollection {

    init() {
        
    }
    
    func insert(_ val: Int) -> Bool {
        
    }
    
    func remove(_ val: Int) -> Bool {
        
    }
    
    func getRandom() -> Int {
        
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * let obj = RandomizedCollection()
 * let ret_1: Bool = obj.insert(val)
 * let ret_2: Bool = obj.remove(val)
 * let ret_3: Int = obj.getRandom()
 */
```

### kotlin
```kotlin
class RandomizedCollection() {

    fun insert(`val`: Int): Boolean {
        
    }

    fun remove(`val`: Int): Boolean {
        
    }

    fun getRandom(): Int {
        
    }

}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = RandomizedCollection()
 * var param_1 = obj.insert(`val`)
 * var param_2 = obj.remove(`val`)
 * var param_3 = obj.getRandom()
 */
```

### dart
```dart
class RandomizedCollection {

  RandomizedCollection() {
    
  }
  
  bool insert(int val) {
    
  }
  
  bool remove(int val) {
    
  }
  
  int getRandom() {
    
  }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * RandomizedCollection obj = RandomizedCollection();
 * bool param1 = obj.insert(val);
 * bool param2 = obj.remove(val);
 * int param3 = obj.getRandom();
 */
```

### golang
```golang
type RandomizedCollection struct {
    
}


func Constructor() RandomizedCollection {
    
}


func (this *RandomizedCollection) Insert(val int) bool {
    
}


func (this *RandomizedCollection) Remove(val int) bool {
    
}


func (this *RandomizedCollection) GetRandom() int {
    
}


/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Insert(val);
 * param_2 := obj.Remove(val);
 * param_3 := obj.GetRandom();
 */
```

### ruby
```ruby
class RandomizedCollection
    def initialize()
        
    end


=begin
    :type val: Integer
    :rtype: Boolean
=end
    def insert(val)
        
    end


=begin
    :type val: Integer
    :rtype: Boolean
=end
    def remove(val)
        
    end


=begin
    :rtype: Integer
=end
    def get_random()
        
    end


end

# Your RandomizedCollection object will be instantiated and called as such:
# obj = RandomizedCollection.new()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.get_random()
```

### scala
```scala
class RandomizedCollection() {

    def insert(`val`: Int): Boolean = {
        
    }

    def remove(`val`: Int): Boolean = {
        
    }

    def getRandom(): Int = {
        
    }

}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * val obj = new RandomizedCollection()
 * val param_1 = obj.insert(`val`)
 * val param_2 = obj.remove(`val`)
 * val param_3 = obj.getRandom()
 */
```

### rust
```rust
struct RandomizedCollection {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl RandomizedCollection {

    fn new() -> Self {
        
    }
    
    fn insert(&self, val: i32) -> bool {
        
    }
    
    fn remove(&self, val: i32) -> bool {
        
    }
    
    fn get_random(&self) -> i32 {
        
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * let obj = RandomizedCollection::new();
 * let ret_1: bool = obj.insert(val);
 * let ret_2: bool = obj.remove(val);
 * let ret_3: i32 = obj.get_random();
 */
```

### racket
```racket
(define randomized-collection%
  (class object%
    (super-new)
    
    (init-field)
    
    ; insert : exact-integer? -> boolean?
    (define/public (insert val)
      )
    ; remove : exact-integer? -> boolean?
    (define/public (remove val)
      )
    ; get-random : -> exact-integer?
    (define/public (get-random)
      )))

;; Your randomized-collection% object will be instantiated and called as such:
;; (define obj (new randomized-collection%))
;; (define param_1 (send obj insert val))
;; (define param_2 (send obj remove val))
;; (define param_3 (send obj get-random))
```

### erlang
```erlang
-spec randomized_collection_init_() -> any().
randomized_collection_init_() ->
  .

-spec randomized_collection_insert(Val :: integer()) -> boolean().
randomized_collection_insert(Val) ->
  .

-spec randomized_collection_remove(Val :: integer()) -> boolean().
randomized_collection_remove(Val) ->
  .

-spec randomized_collection_get_random() -> integer().
randomized_collection_get_random() ->
  .


%% Your functions will be called as such:
%% randomized_collection_init_(),
%% Param_1 = randomized_collection_insert(Val),
%% Param_2 = randomized_collection_remove(Val),
%% Param_3 = randomized_collection_get_random(),

%% randomized_collection_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule RandomizedCollection do
  @spec init_() :: any
  def init_() do
    
  end

  @spec insert(val :: integer) :: boolean
  def insert(val) do
    
  end

  @spec remove(val :: integer) :: boolean
  def remove(val) do
    
  end

  @spec get_random() :: integer
  def get_random() do
    
  end
end

# Your functions will be called as such:
# RandomizedCollection.init_()
# param_1 = RandomizedCollection.insert(val)
# param_2 = RandomizedCollection.remove(val)
# param_3 = RandomizedCollection.get_random()

# RandomizedCollection.init_ will be called before every test case, in which you can do some necessary initializations.
```
