from datetime import datetime
from dataclasses import dataclass

import app

@dataclass
class Task(app.db.Model):

    id: int
    title: str
    timeline: str
    date: datetime
    completed: bool

    id = app.db.Column(app.db.Integer(), primary_key=True)
    title = app.db.Column(app.db.String(140))
    timeline = app.db.Column(app.db.String(140), default = 'None')
    date = app.db.Column(app.db.DateTime(), default=datetime.now())
    completed = app.db.Column(app.db.Boolean(), default=False)
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def __repr__(self):
        return f'<Task id: {self.id} - {self.title} - {self.timeline}'