# Use the official Python image as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file to the container
COPY requirements.txt .

# Install the required dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the container
COPY . .

# Install gunicorn
RUN pip install gunicorn

# Set the entrypoint command to run the Flask app with gunicorn
CMD ["gunicorn", "app:app", "-b", "0.0.0.0:5000"]

EXPOSE 5000
