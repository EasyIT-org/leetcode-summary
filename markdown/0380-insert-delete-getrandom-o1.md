# 380. Insert Delete GetRandom O(1)

- Difficulty: Medium
- Topics: Array, Hash Table, Math, Design, Randomized
- Slug: insert-delete-getrandom-o1
- Problem ID: 380

## Description
Implement the RandomizedSet class:
You must implement the functions of the class such that each function works in average O(1) time complexity.
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output
[null, true, false, true, 2, true, false, 2]

Explanation
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
```


## Constraints
- -231 <= val <= 231 - 1
- At most 2 * 105 calls will be made to insert, remove, and getRandom.
- There will be at least one element in the data structure when getRandom is called.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class RandomizedSet {
public:
    RandomizedSet() {
        
    }
    
    bool insert(int val) {
        
    }
    
    bool remove(int val) {
        
    }
    
    int getRandom() {
        
    }
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet* obj = new RandomizedSet();
 * bool param_1 = obj->insert(val);
 * bool param_2 = obj->remove(val);
 * int param_3 = obj->getRandom();
 */
```

### java
```java
class RandomizedSet {

    public RandomizedSet() {
        
    }
    
    public boolean insert(int val) {
        
    }
    
    public boolean remove(int val) {
        
    }
    
    public int getRandom() {
        
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * boolean param_1 = obj.insert(val);
 * boolean param_2 = obj.remove(val);
 * int param_3 = obj.getRandom();
 */
```

### python
```python
class RandomizedSet(object):

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
        


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
```

### python3
```python3
class RandomizedSet:

    def __init__(self):
        

    def insert(self, val: int) -> bool:
        

    def remove(self, val: int) -> bool:
        

    def getRandom(self) -> int:
        


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
```

### c
```c



typedef struct {
    
} RandomizedSet;


RandomizedSet* randomizedSetCreate() {
    
}

bool randomizedSetInsert(RandomizedSet* obj, int val) {
    
}

bool randomizedSetRemove(RandomizedSet* obj, int val) {
    
}

int randomizedSetGetRandom(RandomizedSet* obj) {
    
}

void randomizedSetFree(RandomizedSet* obj) {
    
}

/**
 * Your RandomizedSet struct will be instantiated and called as such:
 * RandomizedSet* obj = randomizedSetCreate();
 * bool param_1 = randomizedSetInsert(obj, val);
 
 * bool param_2 = randomizedSetRemove(obj, val);
 
 * int param_3 = randomizedSetGetRandom(obj);
 
 * randomizedSetFree(obj);
*/
```

### csharp
```csharp
public class RandomizedSet {

    public RandomizedSet() {
        
    }
    
    public bool Insert(int val) {
        
    }
    
    public bool Remove(int val) {
        
    }
    
    public int GetRandom() {
        
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = new RandomizedSet();
 * bool param_1 = obj.Insert(val);
 * bool param_2 = obj.Remove(val);
 * int param_3 = obj.GetRandom();
 */
```

### javascript
```javascript

var RandomizedSet = function() {
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
```

### typescript
```typescript
class RandomizedSet {
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
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
```

### php
```php
class RandomizedSet {
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
 * Your RandomizedSet object will be instantiated and called as such:
 * $obj = RandomizedSet();
 * $ret_1 = $obj->insert($val);
 * $ret_2 = $obj->remove($val);
 * $ret_3 = $obj->getRandom();
 */
```

### swift
```swift

class RandomizedSet {

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
 * Your RandomizedSet object will be instantiated and called as such:
 * let obj = RandomizedSet()
 * let ret_1: Bool = obj.insert(val)
 * let ret_2: Bool = obj.remove(val)
 * let ret_3: Int = obj.getRandom()
 */
```

### kotlin
```kotlin
class RandomizedSet() {

    fun insert(`val`: Int): Boolean {
        
    }

    fun remove(`val`: Int): Boolean {
        
    }

    fun getRandom(): Int {
        
    }

}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = RandomizedSet()
 * var param_1 = obj.insert(`val`)
 * var param_2 = obj.remove(`val`)
 * var param_3 = obj.getRandom()
 */
```

### dart
```dart
class RandomizedSet {

  RandomizedSet() {
    
  }
  
  bool insert(int val) {
    
  }
  
  bool remove(int val) {
    
  }
  
  int getRandom() {
    
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * RandomizedSet obj = RandomizedSet();
 * bool param1 = obj.insert(val);
 * bool param2 = obj.remove(val);
 * int param3 = obj.getRandom();
 */
```

### golang
```golang
type RandomizedSet struct {
    
}


func Constructor() RandomizedSet {
    
}


func (this *RandomizedSet) Insert(val int) bool {
    
}


func (this *RandomizedSet) Remove(val int) bool {
    
}


func (this *RandomizedSet) GetRandom() int {
    
}


/**
 * Your RandomizedSet object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Insert(val);
 * param_2 := obj.Remove(val);
 * param_3 := obj.GetRandom();
 */
```

### ruby
```ruby
class RandomizedSet
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

# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet.new()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.get_random()
```

### scala
```scala
class RandomizedSet() {

    def insert(`val`: Int): Boolean = {
        
    }

    def remove(`val`: Int): Boolean = {
        
    }

    def getRandom(): Int = {
        
    }

}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * val obj = new RandomizedSet()
 * val param_1 = obj.insert(`val`)
 * val param_2 = obj.remove(`val`)
 * val param_3 = obj.getRandom()
 */
```

### rust
```rust
struct RandomizedSet {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl RandomizedSet {

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
 * Your RandomizedSet object will be instantiated and called as such:
 * let obj = RandomizedSet::new();
 * let ret_1: bool = obj.insert(val);
 * let ret_2: bool = obj.remove(val);
 * let ret_3: i32 = obj.get_random();
 */
```

### racket
```racket
(define randomized-set%
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

;; Your randomized-set% object will be instantiated and called as such:
;; (define obj (new randomized-set%))
;; (define param_1 (send obj insert val))
;; (define param_2 (send obj remove val))
;; (define param_3 (send obj get-random))
```

### erlang
```erlang
-spec randomized_set_init_() -> any().
randomized_set_init_() ->
  .

-spec randomized_set_insert(Val :: integer()) -> boolean().
randomized_set_insert(Val) ->
  .

-spec randomized_set_remove(Val :: integer()) -> boolean().
randomized_set_remove(Val) ->
  .

-spec randomized_set_get_random() -> integer().
randomized_set_get_random() ->
  .


%% Your functions will be called as such:
%% randomized_set_init_(),
%% Param_1 = randomized_set_insert(Val),
%% Param_2 = randomized_set_remove(Val),
%% Param_3 = randomized_set_get_random(),

%% randomized_set_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule RandomizedSet do
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
# RandomizedSet.init_()
# param_1 = RandomizedSet.insert(val)
# param_2 = RandomizedSet.remove(val)
# param_3 = RandomizedSet.get_random()

# RandomizedSet.init_ will be called before every test case, in which you can do some necessary initializations.
```
