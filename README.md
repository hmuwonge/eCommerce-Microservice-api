
# 🛒 Microservices-Based eCommerce REST API

A fully containerized, microservices-based eCommerce platform built with ASP.NET Core. Designed with a focus on modularity, scalability, fault tolerance, and DevOps best practices.

## 🚀 Project Overview

This project demonstrates a modern eCommerce backend architecture using microservices and is deployed via Azure Kubernetes Service (AKS) using full CI/CD pipelines and monitoring dashboards.

---

## 🧩 Architecture Overview

```
[Client] --> [API Gateway (Ocelot)] --> [Microservices]
                      │
         ┌────────────┼────────────┐
         ▼            ▼            ▼
    Products      Users         Orders
     (PostgreSQL) (MySQL)       (MongoDB)
                      │
     ┌────────────────┴────────────────┐
     ▼                                 ▼
RabbitMQ (Messaging)            Redis (Caching)
```

---

## 🧱 Microservices Breakdown

| Service     | Tech Stack             | Database     |
|-------------|------------------------|--------------|
| Products    | ASP.NET Core Web API   | PostgreSQL   |
| Users       | ASP.NET Core Web API   | MySQL        |
| Orders      | ASP.NET Core Web API   | MongoDB      |

Each service is isolated, independently deployable, and communicates via asynchronous messaging with **RabbitMQ**.

---

## ⚙️ Tech Stack

- **.NET Core** – Backend for all microservices
- **Docker** – Containerization
- **Kubernetes (AKS)** – Container orchestration
- **RabbitMQ** – Asynchronous communication
- **Redis** – Caching
- **Ocelot** – API Gateway
- **Azure DevOps** – CI/CD Pipelines
- **Azure Container Registry (ACR)** – Container image hosting
- **Prometheus + Grafana** – Monitoring and observability
- **Azure API Management** – Centralized API control

---

## ✅ Completed Milestones

### 🔨 Development
- Developed all core microservices: Products, Users, Orders
- Implemented fault-tolerant communication with RabbitMQ
- Enabled caching in critical services with Redis
- API Gateway set up using Ocelot

### 🐳 Dockerization
- Dockerized each microservice
- Created unified `docker-compose.yml` for local development
- Pushed Docker images to **Azure Container Registry**

### ☸️ Kubernetes Deployment
- Set up **Azure Kubernetes Service (AKS)**
- Created and applied Kubernetes manifests: `Deployment`, `Service`, `Namespace`, etc.
- Verified deployments and logs using `kubectl`

### 🔁 CI/CD with Azure Pipelines
- Automated Docker builds and ACR push
- Applied manifests via pipeline to AKS cluster
- Triggered builds on commits to `main` branch

### 📈 Monitoring
- Integrated **Prometheus** for metrics scraping
- Configured **Grafana** dashboards for:
  - CPU & memory usage
  - Service health
  - Request rate and latency

---

## 📂 Project Structure

```
/ecommerce-microservices
│
├── gateway/                # Ocelot API Gateway
├── services/
│   ├── products/           # Products Microservice (.NET + PostgreSQL)
│   ├── users/              # Users Microservice (.NET + MySQL)
│   └── orders/             # Orders Microservice (.NET + MongoDB)
├── docker-compose.yml      # Local dev orchestration
├── k8s-manifests/          # Kubernetes YAMLs (Deployment, Service, etc.)
├── .azure-pipelines/       # Azure Pipelines CI/CD config
└── README.md
```

---

## 📦 How to Run (Local)

> Prerequisites: Docker, Docker Compose

```bash
# Start all services locally
docker-compose up --build
```

APIs will be accessible through the API Gateway at `http://localhost:5000`.

---

## ☁️ Deployment (Cloud)

> Prerequisites: Azure CLI, AKS Cluster, ACR access

```bash
# Push Docker images
docker build -t acr-name.azurecr.io/products-api ./services/products
docker push acr-name.azurecr.io/products-api

# Apply K8s manifests
kubectl apply -f ./k8s-manifests/
```

---

## 📊 Monitoring Dashboard

- **Prometheus**: `http://<prometheus-service-ip>:9090`
- **Grafana**: `http://<grafana-service-ip>:3000`
  - Default credentials: `admin / admin`

---

## 🧪 Future Improvements

- Implement JWT Authentication and Role-based Authorization
- Integrate Payment Gateway (e.g. Stripe)
- Add Logging with ELK Stack (Elasticsearch, Logstash, Kibana)
- Add API Rate Limiting and Throttling

---




## 🤝 Contributing

Contributions are welcome. Please fork the repo and submit a pull request.

---

## 📄 License

MIT License. See `LICENSE` file for details.

---

## 👨‍💻 Author

**Muwonge Hassan**
7+ years of software development experience
Specialized in **.NET**, **PHP**, **TypeScript**, **Vue**, **Angular**
Always eager to learn and solve complex problems.

---
