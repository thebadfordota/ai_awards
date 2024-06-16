from rest_framework.routers import DefaultRouter

from components.feedback.views.feedback_view_set import FeedbackModelViewSet

app_name = 'feedback'

router = DefaultRouter()

router.register(r'c', FeedbackModelViewSet, basename='feedback')

urlpatterns = router.urls
