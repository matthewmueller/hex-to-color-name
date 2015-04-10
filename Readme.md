# Hex to Color Name

Tiny module to map hex colors to names of your choice. Good for coercing arbitrary hex colors to a name.

## Example

```js
colors('#ffffff') // => "white"
colors('#ff0ff0') // => "pink"
colors('#0000f0') // => "blue"
```

## Installation

```
npm install hex-to-color-name
```

## API

### `colors(hex, color_map)`

Select the closest color to `hex` in the `color_map`.

The default `color_map` is:

```
{
  "white": "FFFFFF",
  "black": "000000",
  "red": "FF0000",
  "green": "00FF00",
  "blue": "0000FF",
  "pink": "FF00FF",
  "yellow": "FFFF00",
  "teal": "00FFFF"
}
```

Submit a PR  to add more (basic) colors.

## License

MIT
