from profiles.models import Profile
from .models import Post
from django.http import HttpResponse

def action_permission(func):
    def wrapper(request, **kwargs):
        pk = kwargs.get('pk')
        post = Post.objects.get(pk=pk)
        if Profile.user == post.author.user:
            print('yes')
            return func(request, **kwargs)
        else:
            print('no')
            return HttpResponse('You are not authorized to perform this action')
        
    return wrapper
          