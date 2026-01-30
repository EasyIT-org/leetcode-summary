# 981. Time Based Key-Value Store

- Difficulty: Medium
- Topics: Hash Table, String, Binary Search, Design
- Slug: time-based-key-value-store
- Problem ID: 1023

## Description
Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.
Implement the TimeMap class:
Example 1:
Constraints:

## Examples
### Example 1
```text
Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[null, null, "bar", "bar", null, "bar2", "bar2"]

Explanation
TimeMap timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1);         // return "bar"
timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5);         // return "bar2"
```


## Constraints
- 1 <= key.length, value.length <= 100
- key and value consist of lowercase English letters and digits.
- 1 <= timestamp <= 107
- All the timestamps timestamp of set are strictly increasing.
- At most 2 * 105 calls will be made to set and get.

## Hints
(none)

## Follow Ups
(none)

## Code Snippets
### cpp
```cpp
class TimeMap {
public:
    TimeMap() {
        
    }
    
    void set(string key, string value, int timestamp) {
        
    }
    
    string get(string key, int timestamp) {
        
    }
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap* obj = new TimeMap();
 * obj->set(key,value,timestamp);
 * string param_2 = obj->get(key,timestamp);
 */
```

### java
```java
class TimeMap {

    public TimeMap() {
        
    }
    
    public void set(String key, String value, int timestamp) {
        
    }
    
    public String get(String key, int timestamp) {
        
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = new TimeMap();
 * obj.set(key,value,timestamp);
 * String param_2 = obj.get(key,timestamp);
 */
```

### python
```python
class TimeMap(object):

    def __init__(self):
        

    def set(self, key, value, timestamp):
        """
        :type key: str
        :type value: str
        :type timestamp: int
        :rtype: None
        """
        

    def get(self, key, timestamp):
        """
        :type key: str
        :type timestamp: int
        :rtype: str
        """
        


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
```

### python3
```python3
class TimeMap:

    def __init__(self):
        

    def set(self, key: str, value: str, timestamp: int) -> None:
        

    def get(self, key: str, timestamp: int) -> str:
        


# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
```

### c
```c



typedef struct {
    
} TimeMap;


TimeMap* timeMapCreate() {
    
}

void timeMapSet(TimeMap* obj, char* key, char* value, int timestamp) {
    
}

char* timeMapGet(TimeMap* obj, char* key, int timestamp) {
    
}

void timeMapFree(TimeMap* obj) {
    
}

/**
 * Your TimeMap struct will be instantiated and called as such:
 * TimeMap* obj = timeMapCreate();
 * timeMapSet(obj, key, value, timestamp);
 
 * char* param_2 = timeMapGet(obj, key, timestamp);
 
 * timeMapFree(obj);
*/
```

### csharp
```csharp
public class TimeMap {

    public TimeMap() {
        
    }
    
    public void Set(string key, string value, int timestamp) {
        
    }
    
    public string Get(string key, int timestamp) {
        
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = new TimeMap();
 * obj.Set(key,value,timestamp);
 * string param_2 = obj.Get(key,timestamp);
 */
```

### javascript
```javascript

var TimeMap = function() {
    
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
```

### typescript
```typescript
class TimeMap {
    constructor() {
        
    }

    set(key: string, value: string, timestamp: number): void {
        
    }

    get(key: string, timestamp: number): string {
        
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
```

### php
```php
class TimeMap {
    /**
     */
    function __construct() {
        
    }
  
    /**
     * @param String $key
     * @param String $value
     * @param Integer $timestamp
     * @return NULL
     */
    function set($key, $value, $timestamp) {
        
    }
  
    /**
     * @param String $key
     * @param Integer $timestamp
     * @return String
     */
    function get($key, $timestamp) {
        
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * $obj = TimeMap();
 * $obj->set($key, $value, $timestamp);
 * $ret_2 = $obj->get($key, $timestamp);
 */
```

### swift
```swift

class TimeMap {

    init() {
        
    }
    
    func set(_ key: String, _ value: String, _ timestamp: Int) {
        
    }
    
    func get(_ key: String, _ timestamp: Int) -> String {
        
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * let obj = TimeMap()
 * obj.set(key, value, timestamp)
 * let ret_2: String = obj.get(key, timestamp)
 */
```

### kotlin
```kotlin
class TimeMap() {

    fun set(key: String, value: String, timestamp: Int) {
        
    }

    fun get(key: String, timestamp: Int): String {
        
    }

}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
```

### dart
```dart
class TimeMap {

  TimeMap() {
    
  }
  
  void set(String key, String value, int timestamp) {
    
  }
  
  String get(String key, int timestamp) {
    
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = TimeMap();
 * obj.set(key,value,timestamp);
 * String param2 = obj.get(key,timestamp);
 */
```

### golang
```golang
type TimeMap struct {
    
}


func Constructor() TimeMap {
    
}


func (this *TimeMap) Set(key string, value string, timestamp int)  {
    
}


func (this *TimeMap) Get(key string, timestamp int) string {
    
}


/**
 * Your TimeMap object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Set(key,value,timestamp);
 * param_2 := obj.Get(key,timestamp);
 */
```

### ruby
```ruby
class TimeMap
    def initialize()
        
    end


=begin
    :type key: String
    :type value: String
    :type timestamp: Integer
    :rtype: Void
=end
    def set(key, value, timestamp)
        
    end


=begin
    :type key: String
    :type timestamp: Integer
    :rtype: String
=end
    def get(key, timestamp)
        
    end


end

# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap.new()
# obj.set(key, value, timestamp)
# param_2 = obj.get(key, timestamp)
```

### scala
```scala
class TimeMap() {

    def set(key: String, value: String, timestamp: Int): Unit = {
        
    }

    def get(key: String, timestamp: Int): String = {
        
    }

}

/**
 * Your TimeMap object will be instantiated and called as such:
 * val obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * val param_2 = obj.get(key,timestamp)
 */
```

### rust
```rust
struct TimeMap {

}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl TimeMap {

    fn new() -> Self {
        
    }
    
    fn set(&self, key: String, value: String, timestamp: i32) {
        
    }
    
    fn get(&self, key: String, timestamp: i32) -> String {
        
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * let obj = TimeMap::new();
 * obj.set(key, value, timestamp);
 * let ret_2: String = obj.get(key, timestamp);
 */
```

### racket
```racket
(define time-map%
  (class object%
    (super-new)
    
    (init-field)
    
    ; set : string? string? exact-integer? -> void?
    (define/public (set key value timestamp)
      )
    ; get : string? exact-integer? -> string?
    (define/public (get key timestamp)
      )))

;; Your time-map% object will be instantiated and called as such:
;; (define obj (new time-map%))
;; (send obj set key value timestamp)
;; (define param_2 (send obj get key timestamp))
```

### erlang
```erlang
-spec time_map_init_() -> any().
time_map_init_() ->
  .

-spec time_map_set(Key :: unicode:unicode_binary(), Value :: unicode:unicode_binary(), Timestamp :: integer()) -> any().
time_map_set(Key, Value, Timestamp) ->
  .

-spec time_map_get(Key :: unicode:unicode_binary(), Timestamp :: integer()) -> unicode:unicode_binary().
time_map_get(Key, Timestamp) ->
  .


%% Your functions will be called as such:
%% time_map_init_(),
%% time_map_set(Key, Value, Timestamp),
%% Param_2 = time_map_get(Key, Timestamp),

%% time_map_init_ will be called before every test case, in which you can do some necessary initializations.
```

### elixir
```elixir
defmodule TimeMap do
  @spec init_() :: any
  def init_() do
    
  end

  @spec set(key :: String.t, value :: String.t, timestamp :: integer) :: any
  def set(key, value, timestamp) do
    
  end

  @spec get(key :: String.t, timestamp :: integer) :: String.t
  def get(key, timestamp) do
    
  end
end

# Your functions will be called as such:
# TimeMap.init_()
# TimeMap.set(key, value, timestamp)
# param_2 = TimeMap.get(key, timestamp)

# TimeMap.init_ will be called before every test case, in which you can do some necessary initializations.
```
