---
title: "Project: Automated DevOps Toolchain"
date: 2023-10-27
tags: [Terraform, Ansible, Packer, CI/CD]
---

## Summary
Designed and implemented a fully automated solution to provision a complete DevOps platform (Jenkins, SonarQube, Prometheus, Grafana) on a K3s Kubernetes cluster using Infrastructure as Code.

## Problem Statement
Setting up a consistent and secure environment for a DevOps toolchain is often a manual, error-prone, and time-consuming process. This leads to configuration drift, makes it difficult to manage, and complicates disaster recovery.

## My Solution & Architecture
I built a robust, multi-stage solution using a suite of IaC tools to provision a full Kubernetes-based platform from the hardware/VM level all the way to the application level.

1.  **Core Infrastructure (Vagrant & Terraform):** A Vagrantfile defines the base Virtual Machines (master and worker nodes) for local development. This environment is provisioned by **Terraform**,which manages the lifecycle of the Vagrant VMs.
2.  **Tool Installation (Ansible):** Once the VMs are running, an **Ansible** playbook (k3s-ansible) runs against them to automatically install, configure, and bootstrap a lightweight, production-ready K3s Kubernetes cluster.

3.  **Toolchain Deployment (Terraform):** With the K3s cluster's API available, a second **Terraform** project is used. This project leverages the Kubernetes and Helm providers to automatically deploy the entire DevOps toolchain (Jenkins, SonarQube, Prometheus, Grafana) as applications onto the cluster.

### Architecture Diagram
![Toolchain Architecture](/assets/images/image.jpg)


## Tools & Technologies
*   **IaC:** Terraform
*   **Configuration Management:** Ansible
*   **Tools:** Jenkins, SonarQube, Prometheus

## Outcome & Impact
*   **100% Automated Provisioning:** The entire stack can be deployed from zero with a single command.
*   **Reduced Setup Time:** Provisioning time cut from days to under 20 minutes.
*   **Eliminated Configuration Drift:** Guaranteed identical environments for dev, staging, and prod.

## Source Code
*   [Terraform on GitHub](https://github.com/waruimoojin/terraform)
*   [Ansible Roles on GitHub](https://github.com/waruimoojin/k3s-ansible)

