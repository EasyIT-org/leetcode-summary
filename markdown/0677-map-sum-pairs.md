# 677. Map Sum Pairs

- Difficulty: Medium
- Topics: Hash Table, String, Design, Trie
- Slug: map-sum-pairs
- Problem ID: 677

## Description
Design a map that allows you to do the following:
Implement the MapSum class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["MapSum", "insert", "sum", "insert", "sum"]
[[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
Output
[null, null, 3, null, 5]

Explanation
MapSum mapSum = new MapSum();
mapSum.insert("apple", 3);  
mapSum.sum("ap");           // return 3 (apple = 3)
mapSum.insert("app", 2);    
mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)
```


## Constraints
- 1 <= key.length, prefix.length <= 50
- key and prefix consist of only lowercase English letters.
- 1 <= val <= 1000
- At most 50 calls will be made to insert and sum.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class MapSum {
public:
    MapSum() {
        
    }
    
    void insert(string key, int val) {
        
    }
    
    int sum(string prefix) {
        
    }
};

/**
 * Your MapSum object will be instantiated and called as such:
 * MapSum* obj = new MapSum();
 * obj->insert(key,val);
 * int param_2 = obj->sum(prefix);
 */
```

### java
```java
class MapSum {

    public MapSum() {
        
    }
    
    public void insert(String key, int val) {
        
    }
    
    public int sum(String prefix) {
        
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * MapSum obj = new MapSum();
 * obj.insert(key,val);
 * int param_2 = obj.sum(prefix);
 */
```

### python
```python
class MapSum(object):

    def __init__(self):
        

    def insert(self, key, val):
        """
        :type key: str
        :type val: int
        :rtype: None
        """
        

    def sum(self, prefix):
        """
        :type prefix: str
        :rtype: int
        """
        


# Your MapSum object will be instantiated and called as such:
# obj = MapSum()
# obj.insert(key,val)
# param_2 = obj.sum(prefix)
```

### python3
```python3
class MapSum:

    def __init__(self):
        

    def insert(self, key: str, val: int) -> None:
        

    def sum(self, prefix: str) -> int:
        


# Your MapSum object will be instantiated and called as such:
# obj = MapSum()
# obj.insert(key,val)
# param_2 = obj.sum(prefix)
```

### c
```c



typedef struct {
    
} MapSum;


MapSum* mapSumCreate() {
    
}

void mapSumInsert(MapSum* obj, char* key, int val) {
    
}

int mapSumSum(MapSum* obj, char* prefix) {
    
}

void mapSumFree(MapSum* obj) {
    
}

/**
 * Your MapSum struct will be instantiated and called as such:
 * MapSum* obj = mapSumCreate();
 * mapSumInsert(obj, key, val);
 
 * int param_2 = mapSumSum(obj, prefix);
 
 * mapSumFree(obj);
*/
```

### csharp
```csharp
public class MapSum {

    public MapSum() {
        
    }
    
    public void Insert(string key, int val) {
        
    }
    
    public int Sum(string prefix) {
        
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * MapSum obj = new MapSum();
 * obj.Insert(key,val);
 * int param_2 = obj.Sum(prefix);
 */
```

### javascript
```javascript

var MapSum = function() {
    
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
```

### typescript
```typescript
class MapSum {
    constructor() {
        
    }

    insert(key: string, val: number): void {
        
    }

    sum(prefix: string): number {
        
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
```

### php
```php
class MapSum {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param String $key
     * @param Integer $val
     * @return NULL
     */
    function insert($key, $val) {
        
    }
  
    /**
     * @param String $prefix
     * @return Integer
     */
    function sum($prefix) {
        
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * $obj = MapSum();
 * $obj->insert($key, $val);
 * $ret_2 = $obj->sum($prefix);
 */
```

### swift
```swift

class MapSum {

    init() {
        
    }
    
    func insert(_ key: String, _ val: Int) {
        
    }
    
    func sum(_ prefix: String) -> Int {
        
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * let obj = MapSum()
 * obj.insert(key, val)
 * let ret_2: Int = obj.sum(prefix)
 */
```

### kotlin
```kotlin
class MapSum() {

    fun insert(key: String, `val`: Int) {
        
    }

    fun sum(prefix: String): Int {
        
    }

}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = MapSum()
 * obj.insert(key,`val`)
 * var param_2 = obj.sum(prefix)
 */
```

### dart
```dart
class MapSum {

  MapSum() {
    
  }
  
  void insert(String key, int val) {
    
  }
  
  int sum(String prefix) {
    
  }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * MapSum obj = MapSum();
 * obj.insert(key,val);
 * int param2 = obj.sum(prefix);
 */
```

### golang
```golang
type MapSum struct {
    
}


func Constructor() MapSum {
    
}


func (this *MapSum) Insert(key string, val int)  {
    
}


func (this *MapSum) Sum(prefix string) int {
    
}


/**
 * Your MapSum object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Insert(key,val);
 * param_2 := obj.Sum(prefix);
 */
```

### ruby
```ruby
class MapSum
    def initialize()
        
    end


=begin
    :type key: String
    :type val: Integer
    :rtype: Void
=end
    def insert(key, val)
        
    end


=begin
    :type prefix: String
    :rtype: Integer
=end
    def sum(prefix)
        
    end


end

# Your MapSum object will be instantiated and called as such:
# obj = MapSum.new()
# obj.insert(key, val)
# param_2 = obj.sum(prefix)
```

### scala
```scala
class MapSum() {

    def insert(key: String, `val`: Int): Unit = {
        
    }

    def sum(prefix: String): Int = {
        
    }

}

/**
 * Your MapSum object will be instantiated and called as such:
 * val obj = new MapSum()
 * obj.insert(key,`val`)
 * val param_2 = obj.sum(prefix)
 */
```

### rust
```rust
struct MapSum {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MapSum {

    fn new() -> Self {
        
    }
    
    fn insert(&self, key: String, val: i32) {
        
    }
    
    fn sum(&self, prefix: String) -> i32 {
        
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * let obj = MapSum::new();
 * obj.insert(key, val);
 * let ret_2: i32 = obj.sum(prefix);
 */
```

### racket
```racket
(define map-sum%
  (class object%
    (super-new)
    
    (init-field)
    
    ; insert : string? exact-integer? -> void?
    (define/public (insert key val)
      )
    ; sum : string? -> exact-integer?
    (define/public (sum prefix)
      )))

;; Your map-sum% object will be instantiated and called as such:
;; (define obj (new map-sum%))
;; (send obj insert key val)
;; (define param_2 (send obj sum prefix))
```

### erlang
```erlang
-spec map_sum_init_() -> any().
map_sum_init_() ->
  .

-spec map_sum_insert(Key :: unicode:unicode_binary(), Val :: integer()) -> any().
map_sum_insert(Key, Val) ->
  .

-spec map_sum_sum(Prefix :: unicode:unicode_binary()) -> integer().
map_sum_sum(Prefix) ->
  .


%% Your functions will be called as such:
%% map_sum_init_(),
%% map_sum_insert(Key, Val),
%% Param_2 = map_sum_sum(Prefix),

%% map_sum_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule MapSum do
  @spec init_() :: any
  def init_() do
    
  end

  @spec insert(key :: String.t, val :: integer) :: any
  def insert(key, val) do
    
  end

  @spec sum(prefix :: String.t) :: integer
  def sum(prefix) do
    
  end
end

# Your functions will be called as such:
# MapSum.init_()
# MapSum.insert(key, val)
# param_2 = MapSum.sum(prefix)

# MapSum.init_ will be called before every test case, in which you can do some necessary initializations.
```
