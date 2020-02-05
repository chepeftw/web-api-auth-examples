FROM python:3

ADD import_json.py /

RUN python -m pip install pymongo

CMD [ "python", "./import_json.py" ]