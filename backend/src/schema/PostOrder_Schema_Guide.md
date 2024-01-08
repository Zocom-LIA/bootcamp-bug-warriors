# `postOrder` Function Request Body Documentation

The `postOrder` function is designed to process orders containing two types of items: `wonton` and `dip`. Below is the structure and explanation of the request body required by this function.

## Request Body Format

The request body should be a JSON object with one main properties: `wonton` or `dip` or both. Each of these is an array containing objects that represent individual items of that type.

### Wonton Items

Each object in the `wonton` array should have the following structure:

- `name` (string, required)
- `desc` (string, required)
- `price` (number, required)
- `quantity` (number, required)
- `ingredients` (array of strings, required)
- `preparationTime` (number, required)

### Dip Items

Each object in the `dip` array should have the following structure:

- `name` (string, required)
- `desc` (string, required)
- `price` (number, required)
- `quantity` (number, required)

## Example Request Body

```json
{
  "wonton": [
    {
      "name": "Bangkok",
      "desc": "En god friterad wonton med smaker från Bangkoks gator.",
      "price": 9,
      "quantity": 2,
      "ingredients": [
        "morot",
        "salladslök",
        "chili",
        "kokos",
        "lime",
        "koriander"
      ],
      "preparationTime": 1.8
    },
    {
      "name": "Ho Chi Minh",
      "desc": "En god friterad wonton med smaker från vietnams matkultur.",
      "price": 9,
      "quantity": 3,
      "ingredients": [
        "kål",
        "morot",
        "salladslök",
        "chili",
        "vitlök",
        "ingefära",
        "tofu"
      ],
      "preparationTime": 2.1
    }
  ],
  "dip": [
    {
      "name": "Chili Mayo",
      "desc": "Egengjord majonäs smaksatt med chili.",
      "price": 19,
      "quantity": 1
    }
  ]
}
```
