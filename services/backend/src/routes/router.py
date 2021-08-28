from sys import prefix

from fastapi import APIRouter

from .users import router as user_router
from .notes import router as note_router

router = APIRouter()

router.include_router(user_router, prefix='/users', tags=['users'])
router.include_router(note_router, prefix='/notes', tags=['notes'])
