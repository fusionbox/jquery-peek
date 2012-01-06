# jquery.peek.js

## What is it?
Peek is a plugin that adds iframe preview functionality to any form.  It uses an
iframe to simply handle images and such.  In order for the server code to
differentiate a real request from a peek request, Peek adds a hidden field to
the form with the name `peek` and the value `1`.  After the preview is created,
the form is returned to normal and a normal submit will still work.

## How to use?
In your template you would have something like this:

### HTML
```html
<form class="peekable" method="post">
  ...
  <button class="peek">Preview</button>
</form>
```

### JavaScript
```javascript
<script>
  $('.peekable').peek();
</script>
```

On the server side you need to check if the form was submitted with a field
called `peek`.

### Example (with Django)
```python
def my_view(request):
    if 'peek' in request.POST:
        ...
    else:
        ...
```

## How to customize?
By default, Peek will look for an element with the class `peek` to use as the
trigger for the preview; however, you can override this.  You can either pass in
a new selector or even a jQuery object.

**Note:** When using the selector, Peek only searches within the context of the
form.  If you want to use a trigger that is not inside the form, you must pass
in a jQuery object.
