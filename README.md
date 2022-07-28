# list-yml-keys-action

Action to map yml keys to array. Useful for dynamic inputs for matrix strategies.
Inspired by [https://github.com/KJ002/read-yaml](https://github.com/KJ002/read-yaml)

## IO

Input and output variables used by list-yml-keys-action

### Inputs

- **`file` Required** yaml file to read from.

- **`key-path` Required** Path of keys to the value as a JSON list.

### Outputs

- **`data`** Data read from YAML file.

## Example usage

```yaml
on: [push, pull_request]

jobs:
  test-yaml-reader:
    runs-on: ubuntu-latest
    name: Test list-yml-keys-action
    steps:
      - uses: actions/checkout@v1

      - name: Run list-yml-keys-action action
        id: yaml-data
        uses: rmakovyak/list-yml-keys-action@main # You may wish to replace main with a version tag such as '1.6' etc.
        with:
          file: './action.yml' # File to read from
          key-path: '["runs", "using"]' # Access the runs key then the using key and retuns the value.

      - name: Display list-yml-keys-action output
        run: echo "${{ steps.yaml-data.outputs.data }}"
```
