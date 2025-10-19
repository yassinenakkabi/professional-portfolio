---
title: "Project: Automated DevOps Toolchain on AWS"
date: 2023-10-27
tags: [AWS, Terraform, Ansible, CI/CD]
---

## Summary
Designed and implemented a fully automated solution to provision a complete DevOps toolchain (Jenkins, SonarQube, Prometheus) on AWS using Infrastructure as Code.

## Problem Statement
Setting up a consistent and secure environment for a DevOps toolchain is often a manual, error-prone, and time-consuming process. This leads to configuration drift and makes disaster recovery difficult.

## My Solution & Architecture
I built a robust solution using a suite of IaC tools to ensure consistency, security, and speed.

1.  **Core Infrastructure (Terraform):** The entire network (VPC, Subnets, Security Groups) and compute infrastructure (EC2 instances) is defined with **Terraform**, making it version-controlled and easily reproducible.
2.  **Tool Installation (Ansible):** Once instances are running, **Ansible** roles automatically install and configure Jenkins, SonarQube, and Prometheus.

### Architecture Diagram
![Toolchain Architecture](https://link-to-your-diagram-image.com/diagram.png)
*(We'll create this in the next step!)*

## Tools & Technologies
*   **Cloud:** AWS (EC2, VPC, S3)
*   **IaC:** Terraform
*   **Configuration Management:** Ansible
*   **Tools:** Jenkins, SonarQube, Prometheus

## Outcome & Impact
*   **100% Automated Provisioning:** The entire stack can be deployed from zero with a single command.
*   **Reduced Setup Time:** Provisioning time cut from days to under 20 minutes.
*   **Eliminated Configuration Drift:** Guaranteed identical environments for dev, staging, and prod.

## Source Code
*   [Terraform AWS Modules on GitHub](https://github.com/waruimoojin/terraform-aws-modules)
*   [Ansible Roles on GitHub](https://github.com/waruimoojin/ansible-roles)
*   [Packer Images on GitHub](https://github.com/waruimoojin/packer-images)
