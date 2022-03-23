-----backend------
for image python
pip install -r requirements.txt
python manage.py runserver 8000  <-- run the server on port 8000

-----frontend-----
for image node and python
pip install -r requirements.txt

--- if frontend is not built ---
cd frontend
npm i
npm build
cd ../

python manage.py runserver 8001 <-- run the frontend on port 8001
--- to access the frontend go to localhost:8001. ---