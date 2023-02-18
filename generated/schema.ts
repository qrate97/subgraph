// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Moderator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Moderator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Moderator must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Moderator", id.toString(), this);
    }
  }

  static load(id: string): Moderator | null {
    return changetype<Moderator | null>(store.get("Moderator", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get moderatorAddress(): Bytes {
    let value = this.get("moderatorAddress");
    return value!.toBytes();
  }

  set moderatorAddress(value: Bytes) {
    this.set("moderatorAddress", Value.fromBytes(value));
  }

  get subject(): string {
    let value = this.get("subject");
    return value!.toString();
  }

  set subject(value: string) {
    this.set("subject", Value.fromString(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    return value!.toBoolean();
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Question extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Question entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Question must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Question", id.toString(), this);
    }
  }

  static load(id: string): Question | null {
    return changetype<Question | null>(store.get("Question", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get question_id(): BigInt {
    let value = this.get("question_id");
    return value!.toBigInt();
  }

  set question_id(value: BigInt) {
    this.set("question_id", Value.fromBigInt(value));
  }

  get question_question_string(): string {
    let value = this.get("question_question_string");
    return value!.toString();
  }

  set question_question_string(value: string) {
    this.set("question_question_string", Value.fromString(value));
  }

  get question_subject(): string {
    let value = this.get("question_subject");
    return value!.toString();
  }

  set question_subject(value: string) {
    this.set("question_subject", Value.fromString(value));
  }

  get question_topic(): string {
    let value = this.get("question_topic");
    return value!.toString();
  }

  set question_topic(value: string) {
    this.set("question_topic", Value.fromString(value));
  }

  get question_subTopic(): string {
    let value = this.get("question_subTopic");
    return value!.toString();
  }

  set question_subTopic(value: string) {
    this.set("question_subTopic", Value.fromString(value));
  }

  get question_upvotes(): BigInt {
    let value = this.get("question_upvotes");
    return value!.toBigInt();
  }

  set question_upvotes(value: BigInt) {
    this.set("question_upvotes", Value.fromBigInt(value));
  }

  get question_downvotes(): BigInt {
    let value = this.get("question_downvotes");
    return value!.toBigInt();
  }

  set question_downvotes(value: BigInt) {
    this.set("question_downvotes", Value.fromBigInt(value));
  }

  get question_applicant(): Bytes {
    let value = this.get("question_applicant");
    return value!.toBytes();
  }

  set question_applicant(value: Bytes) {
    this.set("question_applicant", Value.fromBytes(value));
  }

  get question_status(): i32 {
    let value = this.get("question_status");
    return value!.toI32();
  }

  set question_status(value: i32) {
    this.set("question_status", Value.fromI32(value));
  }

  get question_incentives(): BigInt {
    let value = this.get("question_incentives");
    return value!.toBigInt();
  }

  set question_incentives(value: BigInt) {
    this.set("question_incentives", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}
