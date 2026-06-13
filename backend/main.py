from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, SessionLocal
from models import Base, PatientRequest

from ai_service import analyze_query

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


Base.metadata.create_all(bind=engine)



@app.get("/")
def home():
    return {
        "message":"HealthFlow AI Running"
    }



@app.post("/analyze")
def analyze(data: dict):

    query = data["query"]

    result = analyze_query(query)


    db = SessionLocal()


    patient = PatientRequest(

        name="User",

        query=query,

        category=result["category"],

        priority=result["priority"],

        department=result["department"]

    )


    db.add(patient)

    db.commit()

    db.close()


    result["query"] = query


    return result
@app.get("/dashboard")
def dashboard():

    db = SessionLocal()


    data = db.query(PatientRequest).all()


    db.close()


    return data

