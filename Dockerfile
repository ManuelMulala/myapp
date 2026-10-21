# Node 20 from ECR Public (avoids Docker Hub rate limits in CodeBuild)
FROM public.ecr.aws/docker/library/node:20-alpine
WORKDIR /usr/src/app

# Install production dependencies only (package files live in src/)
COPY src/package*.json ./
RUN npm ci --omit=dev

# Copy application code
COPY src/ .
EXPOSE 3000
CMD ["npm", "start"]
