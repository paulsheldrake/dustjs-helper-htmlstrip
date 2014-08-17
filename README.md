# htmlstrip helper 

Strip HTML tags from a string using [htmlstrip](https://www.npmjs.org/package/htmlstrip-native).

## Definition

```
{@htmlstrip str="<p>Test</p>" script="false" style="false" /}
```

IFF `script` is `true` text inside `script` tags will be included.
IFF `style` is `true` text inside `style` tags will be included.

## Examples

```
{@htmlstrip str="<p>Test</p>" /} => Test
{@htmlstrip str="<p>Test</p><script>alert('xss')</script>" /} => Test
{@htmlstrip str="<p>Test</p><script>alert('xss')</script>" script="true" /} => Test alert('xss')
```

## Usage
Depends on dustjs-helpers module to be loaded first since it adds it's definition to the
the dust.helpers property.

In node.js:
require('dustjs-helper-htmlstrip');

In browser:

If not using require, load the JS some other way and call it with the dust object. As noted earlier,
dustjs-helpers must be loaded earlier.

