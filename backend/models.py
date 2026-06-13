from sqlalchemy import Column, Integer, String
from database import Base


class PatientRequest(Base):

    __tablename__ = "patient_requests"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String)

    query = Column(String)

    category = Column(String)

    priority = Column(String)

    department = Column(String)