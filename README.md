# forms example

easy-crowd.surge.sh

Minimal example of a form with best practices. As much as possible is done in the HTML, but the style for invalid input needs to be done with some JS because we don't want to mark an input as invalid only if the user has focused on it.

The placeholder and floating label and asterisk for required firelds is all done with just HTML and CSS, which is kind of nice/surprising that it can all be done with no script.

## html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>form example</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <form>
        <div id="shipping">

            <h2>Shipping address</h2>

            <div class="form-group">
                <input type="text" name="name" id="name"
                    placeholder="Gob" required>
                <label for="name">name</label>
            </div>
            <div class="form-group">
                <input type="email" name="email" id="email"
                    placeholder="email@example.com" required>
                <label for="email">e-mail</label>
            </div>
            <div class="form-group">
                <input type="text" id="address" name="address"
                    placeholder="123 Streetname" required>
                <label for="address">address</label>
            </div>

            <div class="form-group">
                <input type="text" id="city" name="city"
                    placeholder="Los Angeles" required>
                <label for="city">city</label>
            </div>

            <div class="form-group">
                <input type="text" id="state" name="state"
                    placeholder="CA" required>
                <label for="state">state</label>
            </div>

            <div class="form-group">
                <input type="text" id="zip-code" name="zip-code"
                    placeholder="12345" required inputmode="numeric"
                    pattern="[0-9]*">
                <label for="zip-code">zip code</label>
            </div>

        </div>

        <hr>

        <div class="form-controls">
            <button type="submit">buy them</button>
        </div>
    </form>
    <script src="/bundle.js"></script>
</body>
</html>
```

## CSS
```css
button {
    cursor: pointer;
}

form {
    .form-controls {
      text-align: right;
      margin-top: 2em;
    }

    .form-group {
      margin-bottom: 1em;
      display: flex;
      flex-flow: column-reverse;
      color: #2f2f2f;

      label {
        transition: all 0.2s;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        cursor: text;
        max-width: 66.66%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transform-origin: left bottom;
        background-color: white;

        padding-left: .01em;

      }
    }

    input:placeholder-shown {
      + label {
        // make it bigger and in the center
        transform: translate(0, 2.125rem) scale(1.5);
      }
    }

    input {
      border: none;
      border-bottom: 1px solid black;
      padding: 1em;

      &.has-focused {
        &:invalid {
          border-color: red;
          border-width: medium;
        }
      }

      &:focus {
        border-color: blue;
        border-width: medium;
        outline: none;

        + label {
          // make it small and at the top
          transform: translate(0, 0) scale(1);
          color: black;

          &:before {
            content: " "!important;
          }
        }
      }

      &:valid {
        + label {
          &:before {
            content: " "!important;
          }
        }
      }

      &:required {
        + label {
          &:before {
            content: "* ";
          }
        }
      }

    }
}
```

## JS
```js
var inputs = document.querySelectorAll('input')

function formIsValid () {
    return Array.prototype.reduce.call(inputs, (acc, input) => {
        return acc && input.validity.valid
    }, true)
}

var btn = document.querySelector('button[type="submit"]')
btn.disabled = true

Array.prototype.forEach.call(inputs, function (input) {
    input.addEventListener('blur', function (ev) {
        input.classList.add('has-focused')
    })

    input.addEventListener('input', function (ev) {
        btn.disabled = !formIsValid()
    })
})
```



   [90mRunning as [4mnichoth@gmail.com[24m[39m[90m (Student)[39m

[90m        project:[39m public
[90m         domain:[39m [1G[0J[90m         domain:[39m flat-beggar.surge.sh[38G
   [33mAborted[39m[90m - you do not have permission to publish to [4mflat-beggar.surge.sh[24m[39m

